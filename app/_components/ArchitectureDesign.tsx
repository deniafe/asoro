import {
  Brain,
  CheckCircle,
  Code,
  Database,
  Globe,
  Layers,
  Rocket,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const ArchitectureDesign = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
        System Architecture
      </h2>
      <p className="text-xl text-amber-800 mb-16 text-center max-w-3xl mx-auto">
        Enterprise-grade microservices architecture built for scale,
        reliability, and performance.
      </p>

      {/* Architecture Diagram */}
      <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-300 mb-12">
        <div className="space-y-6">
          {/* Layer 1: Mobile Apps */}
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-900">
                Mobile Apps Layer
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="font-bold text-blue-900 mb-1">iOS App</div>
                <div className="text-xs text-blue-600">
                  Flutter / React Native
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="font-bold text-blue-900 mb-1">Android App</div>
                <div className="text-xs text-blue-600">
                  Flutter / React Native
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-linear-to-b from-blue-300 to-green-300"></div>
          </div>

          {/* Layer 2: API Gateway */}
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-900">
                API Gateway Layer
              </h3>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="font-bold text-green-900 mb-2">
                Load Balancer + Rate Limiting
              </div>
              <div className="text-xs text-green-600">
                HTTPS/REST + WebSocket • Authentication • SSL Termination
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-linear-to-b from-green-300 to-purple-300"></div>
          </div>

          {/* Layer 3: Microservices */}
          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-300">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-900">
                Microservices Layer
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "User Service", desc: "Auth & Profiles" },
                { name: "Lesson Service", desc: "Content Delivery" },
                { name: "Progress Service", desc: "XP & Tracking" },
                { name: "AI Service", desc: "Speech & Chat" },
                { name: "Social Service", desc: "Community" },
                { name: "Payment Service", desc: "Subscriptions" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-3 border border-purple-200"
                >
                  <div className="font-bold text-purple-900 text-sm mb-1">
                    {service.name}
                  </div>
                  <div className="text-xs text-purple-600">{service.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-linear-to-b from-purple-300 to-amber-300"></div>
          </div>

          {/* Layer 4: Data Layer */}
          <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-300">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg font-bold text-amber-900">Data Layer</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <div className="font-bold text-amber-900 mb-1">PostgreSQL</div>
                <div className="text-xs text-amber-600">
                  User data, progress, relational
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <div className="font-bold text-amber-900 mb-1">MongoDB</div>
                <div className="text-xs text-amber-600">
                  Content, lessons, flexible schema
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <div className="font-bold text-amber-900 mb-1">Redis</div>
                <div className="text-xs text-amber-600">
                  Cache, sessions, real-time
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-1 h-8 bg-linear-to-b from-amber-300 to-orange-300"></div>
          </div>

          {/* Layer 5: External Services */}
          <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-300">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-900">
                External Services Layer
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Cloud STT", desc: "Speech Recognition" },
                { name: "Cloud TTS", desc: "Text-to-Speech" },
                { name: "GPT-4 API", desc: "AI Conversations" },
                { name: "Analytics", desc: "Mixpanel" },
                { name: "Push Notifications", desc: "Firebase" },
                { name: "Payments", desc: "Stripe + Paystack" },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-3 border border-orange-200"
                >
                  <div className="font-bold text-orange-900 text-sm mb-1">
                    {service.name}
                  </div>
                  <div className="text-xs text-orange-600">{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Highlights */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            High Performance
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>API response time &lt;500ms for 95% of requests</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Lesson load time &lt;2 seconds</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Speech processing &lt;3 seconds</span>
            </li>
          </ul>
        </div>

        <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Security & Reliability
          </h3>
          <ul className="space-y-2 text-sm text-green-800">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>99.5% uptime SLA with redundancy</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Encryption at rest (AES-256) and in transit (TLS 1.3)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Daily automated backups with point-in-time recovery</span>
            </li>
          </ul>
        </div>

        <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Infinite Scalability
          </h3>
          <ul className="space-y-2 text-sm text-purple-800">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Auto-scaling handles 10,000+ concurrent users</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Architecture supports 1M+ users without refactoring</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                Global CDN with edge caching for fast worldwide access
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Technical Stack */}
      <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-xl p-8 border-2 border-slate-300">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Complete Technology Stack
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Mobile
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Flutter / React Native (iOS)</li>
              <li>• Flutter / React Native (Android)</li>
              <li>• Core Data / Room</li>
              <li>• AVFoundation / MediaPlayer</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Backend
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Node.js / Express</li>
              <li>• Python / FastAPI</li>
              <li>• Docker / Kubernetes</li>
              <li>• AWS ECS / Lambda</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Database className="w-5 h-5" />
              Data
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• PostgreSQL (RDS)</li>
              <li>• MongoDB (DocumentDB)</li>
              <li>• Redis (ElastiCache)</li>
              <li>• S3 + CloudFront CDN</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              AI/ML
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Google Cloud STT</li>
              <li>• Azure Speech Services</li>
              <li>• OpenAI GPT-4</li>
              <li>• Custom TensorFlow models</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDesign;
