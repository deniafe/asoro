import {
  DollarSign,
  CheckCircle,
  TrendingUp,
  Rocket,
  Heart,
  BarChart3,
  Shield,
} from "lucide-react";

const InvestmentProposition = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
        Investment & Value Proposition
      </h2>
      <p className="text-xl text-amber-800 mb-16 text-center max-w-3xl mx-auto">
        Building cultural infrastructure while creating a scalable, profitable
        business.
      </p>

      {/* Investment Overview */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-linear-to-br from-amber-900 to-orange-900 rounded-3xl p-10 text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-6">Total Investment</h3>
          <div className="text-5xl font-black mb-6 tracking-tighter">
            250 Million Naira
          </div>
          <p className="text-amber-100 mb-8 leading-relaxed opacity-90">
            Comprehensive budget covering 10 months of development, content
            creation, AI training, and launch.
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-amber-700/50">
              <span className="text-amber-200">Development</span>
              <span className="font-bold">₦87.5M (35%)</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-amber-700/50">
              <span className="text-amber-200">AI & ML</span>
              <span className="font-bold">₦27.5M (11%)</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-amber-700/50">
              <span className="text-amber-200">Content Creation</span>
              <span className="font-bold">₦30.0M (12%)</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-amber-700/50">
              <span className="text-amber-200">Infrastructure</span>
              <span className="font-bold">₦22.5M (9%)</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-amber-700/50">
              <span className="text-amber-200">Operational Reserves</span>
              <span className="font-bold">₦82.5M (33%)</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Revenue Model */}
          <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-blue-900 tracking-tight">
                Revenue Model
              </h4>
            </div>
            <ul className="space-y-4 text-blue-800 text-sm font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                <span>
                  <strong className="text-blue-900">Free Tier:</strong>{" "}
                  Unlimited core lessons to drive mass adoption.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                <span>
                  <strong className="text-blue-900">Premium:</strong>{" "}
                  ₦15,000/month (Unlimited AI, offline access, ad-free).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                <span>
                  <strong className="text-blue-900">Family Plan:</strong>{" "}
                  ₦30,000/month for up to 5 users.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                <span>
                  <strong className="text-blue-900">B2B:</strong> Institutional
                  licensing for schools and corporate training.
                </span>
              </li>
            </ul>
          </div>

          {/* Path to Profitability */}
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-green-900 tracking-tight">
                Path to Profitability
              </h4>
            </div>
            <ul className="space-y-4 text-green-800 text-sm font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span>
                  <strong className="text-green-900">Year 1:</strong> 50K MAU,
                  10% premium conversion = ₦900M ARR.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span>
                  <strong className="text-green-900">Year 2:</strong> 200K MAU =
                  ₦3.8B ARR (Profitable operations).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span>
                  <strong className="text-green-900">Year 3:</strong> 500K MAU =
                  ₦9.2B ARR (Expansion capital ready).
                </span>
              </li>
            </ul>
          </div>

          {/* Long-Term Vision */}
          <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-purple-900 tracking-tight">
                Long-Term Vision
              </h4>
            </div>
            <p className="text-purple-800 text-sm leading-relaxed font-medium">
              Become the definitive platform for African language learning.
              Expand to 20+ languages across the continent. Potential
              acquisition target for major global EdTech firms seeking African
              market entry.
            </p>
          </div>
        </div>
      </div>

      {/* Why This Investment Makes Sense */}
      <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl p-12 border-2 border-amber-200 shadow-inner">
        <h3 className="text-3xl font-bold text-amber-900 mb-10 text-center tracking-tight">
          Why This Investment Makes Sense
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="group">
            <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200 transition-transform group-hover:scale-110">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-3 tracking-tight">
              Cultural Impact
            </h4>
            <p className="text-amber-800/80 text-sm leading-relaxed font-medium">
              Preserve linguistic heritage for future generations. Enable
              diaspora reconnection. Create digital infrastructure for 2,000+
              African languages.
            </p>
          </div>
          <div className="group">
            <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200 transition-transform group-hover:scale-110">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-3 tracking-tight">
              Market Opportunity
            </h4>
            <p className="text-amber-800/80 text-sm leading-relaxed font-medium">
              180M+ native speakers, 40M+ diaspora, growing global interest.
              Virtually no quality competition. First-mover advantage in a
              massive market.
            </p>
          </div>
          <div className="group">
            <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200 transition-transform group-hover:scale-110">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-3 tracking-tight">
              Defensible Moat
            </h4>
            <p className="text-amber-800/80 text-sm leading-relaxed font-medium">
              Custom AI models, proprietary content, cultural authenticity, and
              network effects. 24 months minimum for quality competition to
              emerge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentProposition;
