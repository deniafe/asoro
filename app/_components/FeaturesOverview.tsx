import {
  Award,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  Globe,
  Headphones,
  Heart,
  MessageCircle,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Volume2,
  Wifi,
} from "lucide-react";

const FeaturesOverview = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
        Complete Feature Set
      </h2>
      <p className="text-xl text-amber-800 mb-16 text-center max-w-3xl mx-auto">
        Every feature designed for effectiveness, engagement, and cultural
        respect.
      </p>

      {/* Core Learning Features */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-amber-900 mb-8">
          Core Learning Features
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Bite-Sized Lessons",
              description:
                "Each lesson is exactly 15 minutes—perfect for daily habit formation. 15-20 varied exercises per lesson keep engagement high without overwhelming learners.",
              details: [
                "12+ exercise types",
                "Immediate feedback",
                "Progress auto-saved",
                "Can exit and resume anytime",
              ],
            },
            {
              icon: Volume2,
              title: "Pronunciation Mastery",
              description:
                "Custom AI trained on 200+ hours of native speaker audio. Real-time feedback on tonal accuracy with visual pitch graphs showing exactly where you need improvement.",
              details: [
                "Tone visualization",
                "Speech comparison",
                "Unlimited retries",
                "Multiple native speakers",
              ],
            },
            {
              icon: Globe,
              title: "Cultural Immersion",
              description:
                "Every 10th lesson is purely cultural—proverbs, traditions, etiquette, festivals, family structures. Language and culture are inseparable.",
              details: [
                "Traditional proverbs",
                "Social norms",
                "Historical context",
                "Multimedia presentations",
              ],
            },
            {
              icon: Brain,
              title: "Spaced Repetition",
              description:
                "Scientifically-timed review intervals optimize long-term retention. AI tracks what you're forgetting and brings it back at the perfect moment.",
              details: [
                "Modified SuperMemo algorithm",
                "Personalized review schedule",
                "Weak word targeting",
                "Optimal retention",
              ],
            },
            {
              icon: MessageCircle,
              title: "AI Conversation Partner",
              description:
                "Practice real dialogues with AI that understands cultural context and provides gentle corrections. From simple greetings to complex discussions.",
              details: [
                "50+ scenarios",
                "Contextual responses",
                "Cultural coaching",
                "Free trial + premium unlimited",
              ],
            },
            {
              icon: Wifi,
              title: "Offline Learning",
              description:
                "Download lessons over WiFi, practice anywhere without data. Progress syncs automatically when you're connected. Perfect for African connectivity realities.",
              details: [
                "Download 20+ lessons",
                "Full audio included",
                "Smart sync",
                "Works on 2G/3G",
              ],
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-amber-700 leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-amber-600"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gamification System */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-amber-900 mb-8">
          Smart Gamification
        </h3>
        <p className="text-amber-700 mb-8 max-w-3xl">
          {`Gamification creates engagement without manipulation. No dark
              patterns, no pay-to-win, just meaningful motivation that respects
              users' intelligence.`}
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Trophy,
              title: "XP & Levels",
              description:
                "10 XP per lesson, bonus for perfect scores. 100 levels with culturally-themed badges (Griot, Elder, Language Guardian).",
            },
            {
              icon: Target,
              title: "Daily Goals",
              description:
                "Choose your commitment: 5, 10, 15, or 30 min/day. AI adapts based on your actual behavior. Change anytime.",
            },
            {
              icon: Award,
              title: "Achievements",
              description:
                "Earn badges for milestones, consistency, helping others. Cultural badges for completing traditional content.",
            },
            {
              icon: TrendingUp,
              title: "Leaderboards",
              description:
                "Optional competition with friends, country, or language community. Completely opt-out friendly.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-amber-900 mb-2">{item.title}</h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 rounded-xl p-6 border-2 border-green-200">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-green-900 mb-2">
                No Dark Patterns Promise
              </h4>
              <p className="text-green-800 text-sm leading-relaxed">
                No manipulative countdown timers. No guilt-inducing
                notifications. No pay-to-progress mechanics. Achievements
                celebrate actual language milestones, not arbitrary metrics. We
                want genuine learning, not addiction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Community Features */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-amber-900 mb-8">
          Social & Community
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Friend System",
              description:
                "Connect with friends, see their progress, send encouragement, and compete in weekly challenges.",
            },
            {
              icon: MessageCircle,
              title: "Discussion Forums",
              description:
                "Ask questions, share tips, discuss culture. Community-moderated with helpful native speakers.",
            },
            {
              icon: Heart,
              title: "Language Exchange",
              description:
                "Find language partners for practice. Match with native speakers learning English (future feature).",
            },
            {
              icon: Calendar,
              title: "Community Events",
              description:
                "Virtual cultural celebrations, group challenges, live Q&As with linguists and cultural experts.",
            },
            {
              icon: Award,
              title: "Peer Recognition",
              description:
                "Give and receive kudos for helpful answers, consistent practice, and cultural knowledge sharing.",
            },
            {
              icon: Target,
              title: "Group Goals",
              description:
                "Join teams working toward collective milestones. Cultural associations and schools can create private groups.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border-2 border-amber-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-amber-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content & Curriculum Features */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-amber-900 mb-8">
          Content & Curriculum
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
            <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <BookOpen className="w-6 h-6" />
              Comprehensive Lessons
            </h4>
            <ul className="space-y-3 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>180+ lessons</strong> from Foundation to Mastery
                  (A1-C2)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>6,000+ vocabulary words</strong> with audio, images,
                  and context
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Cultural lessons every 10 units</strong> teaching
                  traditions and etiquette
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Grammar explanations</strong> with contrastive
                  analysis vs English
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Story-based learning</strong> following characters
                  through realistic scenarios
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
              <Headphones className="w-6 h-6" />
              Audio Excellence
            </h4>
            <ul className="space-y-3 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Professional voice actors</strong> - native speakers
                  from multiple regions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Diverse accents</strong> representing Lagos, Ibadan,
                  Enugu, Kano
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Studio-quality recordings</strong> with professional
                  audio engineering
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Slow and normal speeds</strong> for difficult phrases
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Pronunciation guides</strong> with IPA notation and
                  tone markers
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Premium Features */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-amber-900 mb-8">
          Premium Subscription Features
        </h3>
        <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-2 border-purple-200">
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-purple-900 mb-2">
              $9.99/month
            </div>
            <div className="text-purple-700">
              Cancel anytime • 7-day free trial
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                {
                  feature: "Unlimited AI Conversations",
                  desc: "Practice with AI partner 24/7",
                },
                {
                  feature: "Unlimited Hearts",
                  desc: "Learn without limits",
                },
                {
                  feature: "Ad-Free Experience",
                  desc: "No distractions, just learning",
                },
                {
                  feature: "Priority Support",
                  desc: "Response within 24 hours",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-purple-200"
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-purple-900">
                      {item.feature}
                    </div>
                    <div className="text-sm text-purple-700">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                {
                  feature: "Offline Downloads",
                  desc: "Unlimited lesson downloads",
                },
                {
                  feature: "Progress Insights",
                  desc: "Detailed analytics and reports",
                },
                {
                  feature: "Advanced Lessons",
                  desc: "Access to C1-C2 content early",
                },
                {
                  feature: "Certificate of Completion",
                  desc: "Official certification per level",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-purple-200"
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-purple-900">
                      {item.feature}
                    </div>
                    <div className="text-sm text-purple-700">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Features */}
      <div>
        <h3 className="text-3xl font-bold text-amber-900 mb-8">
          Accessibility & Inclusion
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Visual Accessibility",
              features: [
                "Screen reader compatible",
                "Adjustable font sizes",
                "High contrast mode",
                "Color-blind friendly",
              ],
            },
            {
              title: "Audio Accessibility",
              features: [
                "Text transcripts for all audio",
                "Visual indicators",
                "Adjustable playback speed",
                "Subtitle options",
              ],
            },
            {
              title: "Learning Accessibility",
              features: [
                "Multiple learning modes",
                "Difficulty adjustment",
                "Extra practice options",
                "No time pressure",
              ],
            },
          ].map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border-2 border-amber-200"
            >
              <h4 className="text-lg font-bold text-amber-900 mb-4">
                {category.title}
              </h4>
              <ul className="space-y-2 text-sm text-amber-700">
                {category.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesOverview;
