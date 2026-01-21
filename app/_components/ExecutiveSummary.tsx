"use client";

import { Rocket, Target, TrendingUp } from "lucide-react";

const ExecutiveSummary = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
        Executive Summary
      </h2>
      <p className="text-xl text-amber-800 mb-12 text-center max-w-3xl mx-auto">
        A comprehensive vision for the definitive African language learning
        platform.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">The Vision</h3>
          <p className="text-amber-800 leading-relaxed mb-4">
            We propose development of a sophisticated, AI-powered mobile
            learning platform dedicated to teaching Nigerian and African
            languages, beginning with Yoruba, Igbo, and Hausa.
          </p>
          <p className="text-amber-800 leading-relaxed mb-4">
            This platform will combine modern educational technology, cultural
            authenticity, and gamified engagement to make African language
            learning accessible, effective, and enjoyable for millions of users
            worldwide.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Unlike generic platforms attempting to add African languages as
            afterthoughts, Asoro is built African-first from inception—with
            native speakers, cultural consultants, and linguistic experts
            driving every decision.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-8 h-8 text-blue-600" />
              <h4 className="text-xl font-bold text-blue-900">Market Gap</h4>
            </div>
            <p className="text-blue-800 text-sm leading-relaxed">
              Despite 180M+ speakers, these languages are critically
              underserved. Existing platforms offer limited or no support,
              leaving youth, diaspora, and international learners without viable
              solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <h4 className="text-xl font-bold text-green-900">
                Perfect Timing
              </h4>
            </div>
            <p className="text-green-800 text-sm leading-relaxed">
              50%+ smartphone penetration in Nigeria, AI maturity for tonal
              languages, cultural renaissance driving demand, and mobile payment
              infrastructure now supporting monetization.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="w-8 h-8 text-purple-600" />
              <h4 className="text-xl font-bold text-purple-900">Scalability</h4>
            </div>
            <p className="text-purple-800 text-sm leading-relaxed">
              {`Platform foundation enables rapid expansion to 2,000+ African
                  languages. This is infrastructure for the entire continent's
                  linguistic future.`}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-900 to-orange-900 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Competitive Differentiation
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold mb-2">✓</div>
            <div className="font-bold mb-2">Culturally Authentic</div>
            <p className="text-amber-100 text-sm">
              Content created BY native speakers, incorporating proverbs,
              storytelling traditions, and cultural context from inception.
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">✓</div>
            <div className="font-bold mb-2">African-First Infrastructure</div>
            <p className="text-amber-100 text-sm">
              Designed for low-bandwidth environments with robust offline
              functionality—works on budget smartphones prevalent in African
              markets.
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">✓</div>
            <div className="font-bold mb-2">Tonally Accurate AI</div>
            <p className="text-amber-100 text-sm">
              Custom speech recognition specifically trained on tonal African
              languages—not generic European-language algorithms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
