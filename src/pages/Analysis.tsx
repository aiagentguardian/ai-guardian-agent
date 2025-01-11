import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Loader } from 'lucide-react';
import { analyzeRepository } from '../lib/anthropic';

const Analysis = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const steps = [
    'Initializing AI Guardian...',
    'Scanning repository structure...',
    'Analyzing dependencies...',
    'Checking for security vulnerabilities...',
    'Generating comprehensive report...'
  ];

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setError(null);

    try {
      // Start the step animation
      for (let i = 0; i < steps.length - 1; i++) {
        setCurrentStep(i);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      // Perform the actual analysis
      const analysisResult = await analyzeRepository(repoUrl);
      
      // Store the analysis result in sessionStorage
      sessionStorage.setItem('analysisResult', JSON.stringify(analysisResult));
      
      // Set final step and navigate
      setCurrentStep(steps.length - 1);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a deterministic ID based on the repo URL
      const repoId = btoa(repoUrl).replace(/[/+=]/g, '').slice(0, 10);
      navigate(`/app/${repoId}`);
    } catch (err) {
      setError('Failed to analyze repository. Please try again.');
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {!isAnalyzing ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Search className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
            <h2 className="text-3xl font-bold mb-8">Analyze Your Repository</h2>
            <form onSubmit={handleAnalysis} className="space-y-4">
              <input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="Enter GitHub repository URL"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
                required
              />
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-500 text-black rounded-lg font-medium hover:bg-emerald-400 transition-colors"
              >
                Start Analysis
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="relative w-24 h-24 mx-auto mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Loader className="w-24 h-24 text-emerald-500" />
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Analysis in Progress</h3>
            <p className="text-gray-400 mb-8 animate-analysis">{steps[currentStep]}</p>
            <div className="w-full bg-gray-900 rounded-full h-2">
              <motion.div
                className="bg-emerald-500 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep + 1) * (100 / steps.length)}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Analysis;