import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.VITE_ANTHROPIC_API_KEY
});

const SECURITY_ANALYSIS_PROMPT = `You are an expert security analyst specializing in code security and vulnerability assessment. Analyze the provided GitHub repository for security vulnerabilities, risks, and potential threats.

Focus on:
1. Dependencies and their known vulnerabilities
2. Code patterns that might indicate security risks
3. Authentication and authorization implementations
4. Data handling and potential exposure points
5. API security concerns
6. Infrastructure security considerations

For each identified issue:
- Classify the severity (high/medium/low)
- Provide a clear description of the vulnerability
- Explain potential impact
- Suggest specific remediation steps

Format the response as a JSON object with the following structure:
{
  "score": number, // Overall security score out of 100
  "threats": [
    {
      "level": "high|medium|low",
      "description": "string",
      "impact": "string",
      "remediation": "string"
    }
  ],
  "recommendations": ["string"] // List of key recommendations
}`;

export async function POST(request: Request) {
  try {
    const { repoUrl } = await request.json();
    
    if (!repoUrl) {
      return NextResponse.json(
        { error: 'Repository URL is required' },
        { status: 400 }
      );
    }

    const message = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: `${SECURITY_ANALYSIS_PROMPT}\n\nRepository URL: ${repoUrl}`
      }]
    });

    const analysis = JSON.parse(message.content[0].text);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Error analyzing repository:', error);
    return NextResponse.json(
      { error: 'Failed to analyze repository' },
      { status: 500 }
    );
  }
}