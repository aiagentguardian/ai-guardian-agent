import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-[url(/nodes.jpeg)] relative bg-cover">
      <div className="bg-gradient-to-b from-black/75 to-transparent absolute top-0 left-0 h-20 w-full"></div>
      <div className="bg-gradient-to-t from-black/75 to-transparent absolute bottom-0 left-0 h-20 w-full"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-gray-800">
          <h2 className="text-3xl font-bold mb-4">Secure Your Digital Assets</h2>
          <p className="text-xl text-gray-400 mb-8">
            Use AI guardians to protect your blockchain protocols and smart contracts.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-black bg-emerald-500 hover:bg-emerald-400 transition-colors"
          >
            AI Security Analysis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}