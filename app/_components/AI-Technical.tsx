import {
  Brain,
  CheckCircle,
  Database,
  Layers,
  MessageCircle,
  Mic,
} from "lucide-react";

const AITechnical = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-amber-600/30 rounded-full border border-amber-600/50 mb-6">
          <span className="text-amber-100 font-semibold">
            Powered by Advanced AI
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The Technology Behind the Magic
        </h2>
        <p className="text-xl text-amber-100 max-w-3xl mx-auto">
          Custom-trained models specifically designed for tonal African
          languages—not generic European-language algorithms.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-amber-800/50 backdrop-blur rounded-xl p-8 border border-amber-700 hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-linear-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-6">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Speech Recognition</h3>
          <p className="text-amber-100 mb-6 leading-relaxed">
            Custom models trained on 200+ hours of native speaker audio per
            language. Recognizes tonal patterns other systems miss completely.
          </p>
          <div className="space-y-2 text-sm text-amber-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Pitch-aware algorithms for tones
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Real-time accuracy scoring
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Visual tone graphs
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Multiple native speaker comparisons
            </div>
          </div>
        </div>

        <div className="bg-amber-800/50 backdrop-blur rounded-xl p-8 border border-amber-700 hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-linear-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Conversation AI</h3>
          <p className="text-amber-100 mb-6 leading-relaxed">
            GPT-4 fine-tuned on African language corpora. Understands cultural
            context, proper honorifics, and appropriate register.
          </p>
          <div className="space-y-2 text-sm text-amber-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              50+ realistic scenarios
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Contextual responses
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Gentle error correction
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Cultural appropriateness trained
            </div>
          </div>
        </div>

        <div className="bg-amber-800/50 backdrop-blur rounded-xl p-8 border border-amber-700 hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-linear-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Adaptive Learning</h3>
          <p className="text-amber-100 mb-6 leading-relaxed">
            AI analyzes your performance patterns and customizes lesson
            sequences to match your learning style and pace.
          </p>
          <div className="space-y-2 text-sm text-amber-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Personalized learning paths
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Spaced repetition optimization
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Mistake pattern tracking
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Difficulty auto-adjustment
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="bg-amber-800/30 backdrop-blur rounded-2xl p-8 border border-amber-700">
        <h3 className="text-2xl font-bold mb-6">
          Scalable Technical Architecture
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Mobile-First Stack
            </h4>
            <ul className="space-y-3 text-amber-100 text-sm">
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>iOS and Android (Flutter) apps</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>Offline-first architecture with smart sync</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>Optimized for low-end devices (2GB RAM)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>Works smoothly on 2G/3G networks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>Average lesson package: &lt;2MB</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Database className="w-5 h-5" />
              Cloud Infrastructure
            </h4>
            <ul className="space-y-3 text-amber-100 text-sm">
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>Microservices on AWS (scalable architecture)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>PostgreSQL + MongoDB for flexible data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>Global CDN for fast audio delivery</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>Auto-scaling to handle viral growth</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400 font-bold">•</span>
                <span>99.5% uptime SLA with redundancy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITechnical;
