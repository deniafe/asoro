import { CheckCircle } from "lucide-react";

const UserPersonas = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
        Who This Serves
      </h2>
      <p className="text-xl text-amber-800 mb-16 text-center max-w-3xl mx-auto">
        Four distinct user segments, each with unique needs and high lifetime
        value potential.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            name: "Chioma",
            role: "The Disconnected Youth",
            age: "19, University Student, Lagos",
            goal: "Connect with heritage and communicate with grandparents",
            image: "👩🏾‍🎓",
            painPoints: [
              "Embarrassed asking parents to teach what she 'should know'",
              "Can't afford ₦10,000/hour private tutors",
              "Disorganized YouTube tutorials were discouraging",
              "Needs flexible learning around class schedule",
            ],
            solution: [
              "Free core access eliminates cost barrier",
              "15-min lessons fit between classes",
              "Private, judgment-free learning environment",
              "Offline mode for commutes without data",
            ],
            monetization:
              "Likely premium upgrade (₦1,500/month) for unlimited AI conversation",
            market: "Millions of Nigerian youth lost ancestral language",
          },
          {
            name: "Adewale",
            role: "The Diaspora Professional",
            age: "34, Software Engineer, London",
            goal: "Pass language to future children and reconnect with father",
            image: "👨🏾‍💼",
            painPoints: [
              "Embarrassed by inability during Nigeria visits",
              "London classes expensive (£30/hour) and inconvenient",
              "Unpredictable tech startup work schedule",
              "Wants native Yoruba, not 'textbook' version",
            ],
            solution: [
              "Flexible scheduling works with unpredictable job",
              "Lagos Yoruba dialect matches family",
              "Cultural lessons explain traditions he remembers vaguely",
              "Progress tracking motivates achievement-oriented professional",
            ],
            monetization:
              "High-value customer willing to pay £10/month premium. Strong word-of-mouth",
            market: "40M+ diaspora worldwide, high purchasing power",
          },
          {
            name: "Sarah",
            role: "The Cultural Enthusiast",
            age: "28, Graduate Student, Columbia University",
            goal: "Research African literature and conduct Fulbright fieldwork",
            image: "👩🏼‍🎓",
            painPoints: [
              "University Hausa classes conflict with seminars",
              "Online resources assume missionary/Peace Corps context",
              "Needs academic register for research interviews",
              "Concerned about cultural missteps during fieldwork",
            ],
            solution: [
              "Self-paced learning fits academic schedule",
              "Cultural context lessons prevent mistakes",
              "Multiple registers (formal, informal, academic)",
              "Offline functionality works during fieldwork",
            ],
            monetization:
              "Institutional sales potential. Grant funding makes premium affordable",
            market:
              "Growing global interest in African studies, business, development",
          },
          {
            name: "Obi",
            role: "The Educator",
            age: "42, Secondary School Igbo Teacher, Enugu",
            goal: "Engage students with modern tools and improve outcomes",
            image: "👨🏾‍🏫",
            painPoints: [
              "Students view Igbo class as boring and irrelevant",
              "School lacks budget for modern materials",
              "Classes of 40+ students, can't give individual attention",
              "Wants homework students will actually complete",
            ],
            solution: [
              "Teacher dashboard assigns lessons and tracks progress",
              "Gamification increases engagement beyond classroom",
              "AI provides individualized attention at scale",
              "Free student accounts overcome budget constraints",
            ],
            monetization:
              "B2B 'Teacher Edition' (₦5,000/month). Government/NGO partnerships potential",
            market: "Nigerian schools mandate indigenous language instruction",
          },
        ].map((persona, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">{persona.image}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-amber-900 mb-1">
                  {persona.name}
                </h3>
                <div className="text-amber-700 font-semibold mb-1">
                  {persona.role}
                </div>
                <div className="text-sm text-amber-600">{persona.age}</div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
              <div className="text-sm text-amber-600 font-semibold mb-1">
                Goal:
              </div>
              <div className="text-amber-900 font-bold">{persona.goal}</div>
            </div>

            <div className="mb-6">
              <div className="text-sm font-bold text-amber-900 mb-3">
                Pain Points:
              </div>
              <div className="space-y-2">
                {persona.painPoints.map((pain, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-amber-700"
                  >
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-sm font-bold text-amber-900 mb-3">
                How Asoro Solves This:
              </div>
              <div className="space-y-2">
                {persona.solution.map((sol, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-amber-700"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="text-xs font-bold text-green-900 mb-1">
                MONETIZATION
              </div>
              <div className="text-sm text-green-800">
                {persona.monetization}
              </div>
              <div className="text-xs text-green-600 mt-2 italic">
                {persona.market}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPersonas;
