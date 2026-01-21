import {
  Smartphone,
  Map,
  Heart,
  Brain,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const MarketOppotunity = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
        Why Now Is The Perfect Moment
      </h2>
      <p className="text-xl text-amber-800 mb-16 text-center max-w-3xl mx-auto">
        Five converging forces create an unprecedented opportunity for African
        language technology.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="relative bg-linear-to-br from-amber-100 to-orange-100 rounded-2xl p-12 border-2 border-amber-300 h-80">
            <Map className="w-full h-full text-amber-600 opacity-10 absolute inset-0" />
            <div className="relative flex flex-col items-center justify-center h-full">
              <div className="text-7xl font-bold text-amber-900 mb-4">3</div>
              <div className="text-2xl text-amber-700 font-bold mb-6">
                Languages, Phase One
              </div>
              <div className="flex gap-4 text-sm">
                <span className="px-3 py-1 bg-amber-600 text-white rounded-full font-semibold">
                  Yoruba
                </span>
                <span className="px-3 py-1 bg-amber-600 text-white rounded-full font-semibold">
                  Igbo
                </span>
                <span className="px-3 py-1 bg-amber-600 text-white rounded-full font-semibold">
                  Hausa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shrink-0">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Mobile Penetration at Inflection Point
              </h3>
              <p className="text-amber-700 leading-relaxed">
                {`Nigeria's smartphone adoption has reached 50%+ and rising
                    rapidly. Mobile-first solutions can now reach mass market.
                    This is the infrastructure moment.`}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Cultural Renaissance Driving Demand
              </h3>
              <p className="text-amber-700 leading-relaxed">
                Afrobeats, Nollywood, and African fashion dominate global
                culture. This drives massive interest in African languages
                beyond just heritage learners.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                AI Technology Finally Ready
              </h3>
              <p className="text-amber-700 leading-relaxed">
                Speech recognition and NLP have matured to handle tonal African
                languages effectively. What was impossible 5 years ago is now
                achievable.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Diaspora Reconnection Movement
              </h3>
              <p className="text-amber-700 leading-relaxed">
                40M+ Nigerians abroad actively seek tools to reconnect with
                heritage and teach children. High purchasing power, emotionally
                driven demand.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                Payment Infrastructure in Place
              </h3>
              <p className="text-amber-700 leading-relaxed">
                Mobile payment systems (Paystack, Flutterwave) now support
                monetization across African markets. Business model viability
                proven.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Total Addressable Market
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">180M</div>
            <div className="text-amber-100">Native Speakers (3 languages)</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">40M+</div>
            <div className="text-amber-100">Nigerian Diaspora</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">500M+</div>
            <div className="text-amber-100">
              Expansion Potential (20 languages)
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">1.3B</div>
            <div className="text-amber-100">African Population (long-term)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOppotunity;
