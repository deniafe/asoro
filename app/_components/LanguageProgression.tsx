import { Clock } from "lucide-react";
import React from "react";

const LanguageProgression = () => {
  const levels = [
    {
      level: "Foundation (A1)",
      duration: "4-6 weeks",
      content:
        "300 essential words • Basic greetings • Present tense • Simple sentences • Survival communication",
      styles: {
        card: "bg-green-50 border-green-200",
        badge: "bg-green-600",
        title: "text-green-900",
        duration: "text-green-600",
        text: "text-green-800",
      },
    },
    {
      level: "Elementary (A2)",
      duration: "2-3 months",
      content:
        "600 words • Past/future tenses • Conversational exchanges • Family & daily routines • Basic honorifics",
      styles: {
        card: "bg-blue-50 border-blue-200",
        badge: "bg-blue-600",
        title: "text-blue-900",
        duration: "text-blue-600",
        text: "text-blue-800",
      },
    },
    {
      level: "Intermediate (B1)",
      duration: "4-6 months",
      content:
        "1,200 words • Complex sentences • Storytelling • Opinions • Cultural proverbs",
      styles: {
        card: "bg-purple-50 border-purple-200",
        badge: "bg-purple-600",
        title: "text-purple-900",
        duration: "text-purple-600",
        text: "text-purple-800",
      },
    },
    {
      level: "Upper Intermediate (B2)",
      duration: "8-12 months",
      content:
        "2,500 words • Fluent conversation • Dialect variations • Formal/informal registers • Idiomatic expressions",
      styles: {
        card: "bg-amber-50 border-amber-200",
        badge: "bg-amber-600",
        title: "text-amber-900",
        duration: "text-amber-600",
        text: "text-amber-800",
      },
    },
    {
      level: "Advanced (C1)",
      duration: "12-18 months",
      content:
        "4,000+ words • Debate skills • Literature • Advanced cultural discussions • Regional accents",
      styles: {
        card: "bg-orange-50 border-orange-200",
        badge: "bg-orange-600",
        title: "text-orange-900",
        duration: "text-orange-600",
        text: "text-orange-800",
      },
    },
    {
      level: "Mastery (C2)",
      duration: "Lifelong",
      content:
        "6,000+ words • Native-level fluency • Literary analysis • Teaching capability • Complete cultural competence",
      styles: {
        card: "bg-red-50 border-red-200",
        badge: "bg-red-600",
        title: "text-red-900",
        duration: "text-red-600",
        text: "text-red-800",
      },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
        Structured Language Progression
      </h2>
      <p className="text-xl text-amber-800 mb-16 text-center max-w-3xl mx-auto">
        Six proficiency levels from foundation to mastery, aligned with
        international standards.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {levels.map((level, idx) => (
          <div
            key={idx}
            className={`${level.styles.card} rounded-xl p-6 border-2 hover:scale-105 transition-transform duration-300`}
          >
            <div
              className={`${level.styles.badge} inline-block px-3 py-1 text-white rounded-full text-sm font-bold mb-3`}
            >
              Level {idx + 1}
            </div>
            <h4 className={`${level.styles.title} text-xl font-bold mb-2`}>
              {level.level}
            </h4>
            <div
              className={`${level.styles.duration} text-sm mb-4 flex items-center gap-2`}
            >
              <Clock className="w-4 h-4" />
              {level.duration}
            </div>
            <p className={`${level.styles.text} text-sm leading-relaxed`}>
              {level.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Complete Learning Path</h3>
        <p className="text-amber-100 max-w-3xl mx-auto">
          {`From complete beginner to native-level fluency, every step is carefully
          designed with clear milestones, cultural context, and proven pedagogy.
          This isn't just vocabulary—it's comprehensive language mastery.`}
        </p>
      </div>
    </div>
  );
};

export default LanguageProgression;
