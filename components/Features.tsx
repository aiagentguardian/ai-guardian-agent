import { Shield, Cpu, Database, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Real-time Protection",
    description: "Continuous monitoring and instant vulnerability detection"
  },
  {
    icon: Cpu,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms for precise threat detection"
  },
  {
    icon: Database,
    title: "Comprehensive Scans",
    description: "Deep analysis of code, dependencies, and configurations"
  },
  {
    icon: ShieldCheck,
    title: "Best Practices",
    description: "Alignment with industry security standards and protocols"
  }
];

export function Features() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Intelligent Security Analysis</h2>
          <p className="text-xl text-gray-400">Powered by advanced AI to keep your code secure</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800 backdrop-blur-sm hover:scale-105 transition-transform"
              >
                <Icon className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}