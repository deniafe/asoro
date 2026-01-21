import { ArrowRight, Play } from "lucide-react";

interface navProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: navProps) => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <div className="inline-block mb-6 px-4 py-2 bg-amber-600/10 rounded-full border border-amber-600/20">
        <span className="text-amber-900 font-semibold">
          Yoruba • Igbo • Hausa
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-12 leading-tight">
        Asoro:
        <br />
        <span className="text-4xl md:text-6xl bg-linear-to-r pt--6 from-orange-600 to-orange-700 bg-clip-text text-transparent">
          African Languages for Everyone
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-amber-800 mb-12 max-w-3xl mx-auto leading-relaxed">
        A mobile-first, AI-powered educational platform making Nigerian
        languages accessible, engaging, and effective for millions worldwide.
        This is cultural infrastructure disguised as a beautiful app.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button
          onClick={() => scrollToSection("executive")}
          className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          Read Full Proposal
          <ArrowRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollToSection("product")}
          className="bg-white hover:bg-amber-50 text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 border-2 border-amber-900"
        >
          See the Product
          <Play className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-amber-200">
          <div className="text-4xl font-bold text-amber-900 mb-2">180M+</div>
          <div className="text-amber-700">Combined Native Speakers</div>
        </div>
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-amber-200">
          <div className="text-4xl font-bold text-amber-900 mb-2">40M+</div>
          <div className="text-amber-700">Nigerian Diaspora Worldwide</div>
        </div>
        <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-amber-200">
          <div className="text-4xl font-bold text-amber-900 mb-2">$0</div>
          <div className="text-amber-700">Quality Alternatives Exist</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
