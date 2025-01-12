import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-gray-800">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Code?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Start analyzing your repository now and get instant security insights.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-black bg-emerald-500 hover:bg-emerald-400 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}