import { Anthropic } from '@anthropic-ai/sdk';

export interface SecurityAnalysisOptions {
  apiKey: string;
  model?: string;
  maxTokens?: number;
}

export interface SecurityThreat {
  level: 'high' | 'medium' | 'low';
  description: string;
  impact: string;
  remediation: string;
}

export interface SecurityAnalysisResult {
  score: number;
  threats: SecurityThreat[];
  recommendations: string[];
}

export class GuardianAI {
  private anthropic: Anthropic;
  private model: string;
  private maxTokens: number;

  constructor(options: SecurityAnalysisOptions) {
    this.anthropic = new Anthropic({
      apiKey: options.apiKey,
    });
    this.model = options.model || 'claude-3-haiku-20240307';
    this.maxTokens = options.maxTokens || 4096;
  }

  async analyzeRepository(repoUrl: string): Promise<SecurityAnalysisResult> {
    try {
      const message = await this.anthropic.messages.create({
        model: this.model,
        max_tokens: this.maxTokens,
        messages: [{
          role: 'user',
          content: this.buildPrompt(repoUrl)
        }]
      });

      return JSON.parse(message.content[0].text);
    } catch (error) {
      throw error;
    }
  }

  private buildPrompt(repoUrl: string): string {
    return `You are an expert security analyst specializing in code security and vulnerability assessment. Analyze the provided GitHub repository for security vulnerabilities, risks, and potential threats.

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

Repository URL: ${repoUrl}`;
  }
}

// React Hook for easy integration
export function useGuardianAI(options: SecurityAnalysisOptions) {
  const guardian = new GuardianAI(options);
  
  return {
    analyzeRepository: guardian.analyzeRepository.bind(guardian),
  };
}