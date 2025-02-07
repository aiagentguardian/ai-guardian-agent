'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Loader, Shield, GitBranch, PackageSearch, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const loadingSteps = [
  { icon: GitBranch, text: "Cloning repository..." },
  { icon: PackageSearch, text: "Scanning dependencies..." },
  { icon: ShieldCheck, text: "Analyzing security patterns..." },
  { icon: Sparkles, text: "Generating report..." }
];

export function AnalysisForm() {
  const [repoUrl, setRepoUrl] = useState('');
  const [programId, setProgramId] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setCurrentStep(0);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          repoUrl,
          programId: programId || undefined
        }),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const result = await response.json();
      sessionStorage.setItem('analysisResult', JSON.stringify(result));
      router.push(`/app/${encodeURIComponent(repoUrl)}`);
    } catch (err) {
      setError('Failed to analyze repository. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-8 rounded-xl bg-gray-900/50 border border-gray-800 relative overflow-hidden"
    >
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-12 text-center relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Shield className="w-16 h-16 text-emerald-500" />
          </motion.div>

          <div className="space-y-8">
            {loadingSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: currentStep >= index ? 1 : 0.3,
                    x: currentStep >= index ? 0 : -20,
                  }}
                  className="flex items-center justify-center space-x-3"
                >
                  <StepIcon 
                    className={`w-5 h-5 ${
                      currentStep === index ? 'text-emerald-500' : 'text-gray-400'
                    }`}
                  />
                  <span className={`${
                    currentStep === index ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.text}
                  </span>
                  {currentStep === index && (
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Loader className="w-4 h-4 text-emerald-500 animate-spin" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="repoUrl" className="block text-sm font-medium mb-2">
              GitHub Repository URL
            </label>
            <div className="relative">
              <input
                type="url"
                id="repoUrl"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="https://github.com/username/repository"
                className="w-full px-4 py-3 bg-black rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                required
              />
              <Search className="absolute right-3 text-gray-400 top-3" />
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Enter the URL of the GitHub repository you want to analyze
            </p>
          </div>

          <div>
            <label htmlFor="programId" className="block text-sm font-medium mb-2">
              Solana Program ID (Optional)
            </label>
            <input
              type="text"
              id="programId"
              value={programId}
              onChange={(e) => setProgramId(e.target.value)}
              placeholder="Enter Solana program ID for on-chain analysis"
              className="w-full px-4 py-3 bg-black rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
            />
            <p className="mt-2 text-sm text-gray-400">
              Add a Solana program ID to include on-chain security analysis
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <>
                <Loader className="animate-spin mr-2" />
                Analyzing...
              </>
            ) : (
              'Analyze Repository'
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}