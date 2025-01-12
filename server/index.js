import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.VITE_ANTHROPIC_API_KEY,
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

app.post('/api/analyze', async (req, res) => {
  try {
    const { repoUrl } = req.body;
    
    if (!repoUrl) {
      return res.status(400).json({ error: 'Repository URL is required' });
    }

    const message = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: `${SECURITY_ANALYSIS_PROMPT}\n\nRepository URL: ${repoUrl}`
      }]
    });

    const analysis = JSON.parse(message.content[0].text);
    res.json(analysis);
  } catch (error) {
    console.error('Error analyzing repository:', error);
    res.status(500).json({ error: 'Failed to analyze repository' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});