import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { Connection, PublicKey } from '@solana/web3.js';

const anthropic = new Anthropic({
  apiKey: process.env.VITE_ANTHROPIC_API_KEY
});

// List of fallback RPC endpoints
const RPC_ENDPOINTS = [
  'https://api.mainnet-beta.solana.com',
  'https://solana-mainnet.g.alchemy.com/v2/demo',
  'https://rpc.ankr.com/solana',
];

async function getWorkingConnection() {
  for (const endpoint of RPC_ENDPOINTS) {
    try {
      const connection = new Connection(endpoint);
      // Test the connection
      await connection.getSlot();
      return connection;
    } catch (error) {
      console.warn(`RPC endpoint ${endpoint} failed:`, error);
      continue;
    }
  }
  throw new Error('No working RPC endpoint found');
}

const SECURITY_ANALYSIS_PROMPT = `You are an expert security analyst specializing in code and blockchain security. Analyze the provided GitHub repository and Solana program for security vulnerabilities, risks, and potential threats.

Focus on:
1. Dependencies and their known vulnerabilities
2. Code patterns that might indicate security risks
3. Authentication and authorization implementations
4. Data handling and potential exposure points
5. API security concerns
6. Infrastructure security considerations
7. Solana-specific security concerns:
   - Program upgrade authority
   - PDA validation
   - Token handling
   - Access control patterns
   - Cross-Program Invocation (CPI) risks

For each identified issue:
- Classify the severity (high/medium/low)
- Provide a clear description of the vulnerability
- Explain potential impact
- Suggest specific remediation steps

Format the response as a JSON object with the following structure:
{
  "score": number,
  "threats": [
    {
      "level": "high|medium|low",
      "description": "string",
      "impact": "string",
      "remediation": "string",
      "category": "code|blockchain"
    }
  ],
  "recommendations": ["string"],
  "onChainAnalysis": {
    "programId": "string",
    "upgradeAuthority": "string",
    "tokenAccounts": number,
    "pdaCount": number,
    "securityScore": number,
    "findings": [
      {
        "type": "string",
        "severity": "high|medium|low",
        "description": "string"
      }
    ]
  }
}`;

async function analyzeSolanaProgram(programId: string) {
  try {
    const connection = await getWorkingConnection();
    const programKey = new PublicKey(programId);

    // Get program account info
    const programInfo = await connection.getAccountInfo(programKey);
    
    if (!programInfo) {
      throw new Error('Program not found');
    }

    // Instead of getProgramAccounts, we'll use getAccountInfo and some basic checks
    const programData = await connection.getAccountInfo(
      PublicKey.findProgramAddressSync(
        [programKey.toBytes()],
        new PublicKey('BPFLoaderUpgradeab1e11111111111111111111111')
      )[0]
    );

    // Calculate a basic security score based on available data
    const securityScore = calculateSecurityScore(programInfo, programData);

    return {
      programId: programId,
      programSize: programInfo.data.length,
      tokenAccounts: 'Restricted by RPC', // Note the limitation
      isUpgradeable: programData !== null,
      upgradeAuthority: programData?.owner?.toBase58() || 'None',
      pdaCount: 'Restricted by RPC', // Note the limitation
      securityScore,
      findings: generateFindings(programInfo, programData),
    };
  } catch (error) {
    console.error('Error analyzing Solana program:', error);
    throw error;
  }
}

function calculateSecurityScore(programInfo: any, programData: any) {
  let score = 80; // Start with a base score

  // Deduct points for potential security concerns
  if (programData) {
    score -= 10; // Program is upgradeable
  }
  if (programInfo.data.length > 1000000) {
    score -= 5; // Large program size
  }

  return Math.max(0, Math.min(100, score));
}

function generateFindings(programInfo: any, programData: any) {
  const findings = [];

  if (programData) {
    findings.push({
      type: 'Upgrade Authority',
      severity: 'medium',
      description: 'Program is upgradeable, which could pose a security risk if the upgrade authority is compromised.',
    });
  }

  if (programInfo.data.length > 1000000) {
    findings.push({
      type: 'Program Size',
      severity: 'low',
      description: 'Large program size may indicate complexity and potential security risks.',
    });
  }

  return findings;
}

export async function POST(request: Request) {
  try {
    const { repoUrl, programId } = await request.json();
    
    if (!repoUrl) {
      return NextResponse.json(
        { error: 'Repository URL is required' },
        { status: 400 }
      );
    }

    // Analyze Solana program if provided
    let onChainAnalysis = null;
    if (programId) {
      try {
        onChainAnalysis = await analyzeSolanaProgram(programId);
      } catch (error: any) {
        return NextResponse.json(
          { error: `Error analyzing Solana program: ${error.message}` },
          { status: 500 }
        );
      }
    }

    const message = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: `${SECURITY_ANALYSIS_PROMPT}\n\nRepository URL: ${repoUrl}\nSolana Program Analysis: ${JSON.stringify(onChainAnalysis)}`
      }]
    });

    const analysis = JSON.parse(message.content[0].text);
    return NextResponse.json({
      ...analysis,
      onChainAnalysis
    });
  } catch (error: any) {
    console.error('Error analyzing repository:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze repository' },
      { status: 500 }
    );
  }
}