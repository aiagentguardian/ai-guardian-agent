'use client';

import { useEffect, useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, XCircle, FileCode, Package, Lock } from 'lucide-react';

interface Threat {
  level: string;
  description: string;
  impact: string;
  remediation: string;
}

interface AnalysisData {
  score: number;
  threats: Threat[];
  recommendations: string[];
}

interface AnalysisMetrics {
  filesScanned: number;
  dependenciesChecked: number;
  criticalIssues: number;
  timeToFix: string;
}

export function AnalysisResult({ id }: { id: string }) {
  const [results, setResults] = useState<AnalysisData | null>(null);
  
  const metrics: AnalysisMetrics = {
    filesScanned: 247,
    dependenciesChecked: 89,
    criticalIssues: 3,
    timeToFix: "~4 hours"
  };

  useEffect(() => {
    const storedResults = sessionStorage.getItem('analysisResult');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  if (!results) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
          <h2 className="text-3xl font-bold mb-4">Security Analysis Report</h2>
          <p className="text-gray-400">Repository: {decodeURIComponent(id)}</p>
        </div>

        {/* Analysis Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <FileCode className="w-6 h-6 text-emerald-500 mb-2" />
            <div className="text-2xl font-bold mb-1">{metrics.filesScanned}</div>
            <p className="text-sm text-gray-400">Files Scanned</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <Package className="w-6 h-6 text-emerald-500 mb-2" />
            <div className="text-2xl font-bold mb-1">{metrics.dependenciesChecked}</div>
            <p className="text-sm text-gray-400">Dependencies</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
            <div className="text-2xl font-bold mb-1">{metrics.criticalIssues}</div>
            <p className="text-sm text-gray-400">Critical Issues</p>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
            <Lock className="w-6 h-6 text-emerald-500 mb-2" />
            <div className="text-2xl font-bold mb-1">{metrics.timeToFix}</div>
            <p className="text-sm text-gray-400">Est. Fix Time</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Security Score</h3>
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-800"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-emerald-500"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                    strokeDasharray={`${2 * Math.PI * 56 * results.score / 100} ${2 * Math.PI * 56}`}
                    transform="rotate(-90 64 64)"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                  {results.score}%
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Identified Threats</h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {results.threats.map((threat, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-900">
                  <div className="flex items-center space-x-3 mb-2">
                    {threat.level === 'high' ? (
                      <XCircle className="w-5 h-5 text-red-500" />
                    ) : threat.level === 'medium' ? (
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    )}
                    <span className="text-gray-300 font-medium">{threat.description}</span>
                  </div>
                  <div className="ml-9 space-y-2">
                    <p className="text-sm text-gray-400"><span className="text-gray-300 font-medium">Impact:</span> {threat.impact}</p>
                    <p className="text-sm text-gray-400"><span className="text-gray-300 font-medium">Solution:</span> {threat.remediation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
          <ul className="space-y-3">
            {results.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}