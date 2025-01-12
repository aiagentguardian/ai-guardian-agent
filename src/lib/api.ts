import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export async function analyzeRepository(repoUrl: string) {
  try {
    const response = await axios.post(`${API_URL}/analyze`, { repoUrl });
    return response.data;
  } catch (error) {
    console.error('Error analyzing repository:', error);
    throw new Error('Failed to analyze repository');
  }
}