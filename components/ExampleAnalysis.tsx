import { XCircle, AlertTriangle, CheckCircle } from 'lucide-react';

const exampleAnalysis = {
  score: 78,
  metrics: {
    filesScanned: 247,
    dependenciesChecked: 89,
    criticalIssues: 3,
    timeToFix: "~4 hours"
  },
  threats: [
    {
      level: 'high',
      description: 'Outdated npm packages with known vulnerabilities',
      impact: 'Potential security exploits through vulnerable dependencies',
      remediation: 'Update packages to their latest secure versions'
    },
    {
      level: 'medium',
      description: 'Insufficient input validation',
      impact: 'Risk of injection attacks',
      remediation: 'Implement proper input validation and sanitization'
    }
  ],
  recommendations: [
    'Enable automated dependency updates',
    'Implement strict input validation',
    'Add Content Security Policy headers'
  ]
};

export function ExampleAnalysis() {
  return (
    <section id="demo" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-gray-400">Example security analysis report</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Score and Metrics */}
          <div className="space-y-8">
            {/* Security Score */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Security Score</h3>
              <div className="relative w-48 h-48 mx-auto">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-gray-800"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="90"
                    cx="96"
                    cy="96"
                  />
                  <circle
                    className="text-emerald-500"
                    strokeWidth="12"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="90"
                    cx="96"
                    cy="96"
                    strokeDasharray={`${2 * Math.PI * 90 * exampleAnalysis.score / 100} ${2 * Math.PI * 90}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">{exampleAnalysis.score}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Threats and Recommendations */}
          <div className="space-y-8">
            {/* Threats */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Identified Threats</h3>
              <div className="space-y-4">
                {exampleAnalysis.threats.map((threat, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gray-900/50"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      {threat.level === 'high' ? (
                        <XCircle className="w-5 h-5 text-red-500" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      )}
                      <span className="text-gray-300 font-medium">{threat.description}</span>
                    </div>
                    <div className="ml-8 text-sm text-gray-400">
                      <p><span className="text-gray-300">Impact:</span> {threat.impact}</p>
                      <p><span className="text-gray-300">Solution:</span> {threat.remediation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
              <ul className="space-y-3">
                {exampleAnalysis.recommendations.map((recommendation, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-300">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}