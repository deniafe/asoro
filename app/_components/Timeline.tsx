import {
  BookOpen,
  CheckCircle,
  Clock,
  Code,
  Database,
  Smartphone,
  Search,
  Palette,
  Settings,
  Microscope,
  Rocket,
  TrendingUp,
} from "lucide-react";

const PaymentMilestones = () => {
  const paymentData = [
    {
      milestone: "Contract Signing",
      // payment: "₦25.0M (10%)",
      payment: " (10%)",
      timing: "Phase 1",
      deliverable: "Project kickoff, team assembly, and environment setup.",
      color: "blue",
    },
    {
      milestone: "System Architecture",
      // payment: "₦12.5M (5%)",
      payment: " (5%)",
      timing: "Phase 2",
      deliverable:
        "Database schema, API documentation, and cloud architecture.",
      color: "blue",
    },
    {
      milestone: "UI/UX Design",
      // payment: "₦12.5M (5%)",
      payment: " (5%)",
      timing: "Phase 3",
      deliverable: "High-fidelity wireframes and interactive prototypes.",
      color: "purple",
    },
    {
      milestone: "Backend Core",
      // payment: "₦25.0M (10%)",
      payment: " (10%)",
      timing: "Phase 4",
      deliverable: "Authentication, user management, and core API services.",
      color: "purple",
    },
    {
      milestone: "Mobile Core",
      // payment: "₦25.0M (10%)",
      payment: " (10%)",
      timing: "Phase 5",
      deliverable: "Base iOS and Android builds with core navigation.",
      color: "green",
    },
    {
      milestone: "AI Integration",
      // payment: "₦25.0M (10%)",
      payment: " (10%)",
      timing: "Phase 6",
      deliverable: "NLP engine integration and automated translation services.",
      color: "green",
    },
    {
      milestone: "Content Phase 1",
      // payment: "₦25.0M (10%)",
      payment: " (10%)",
      timing: "Phase 7",
      deliverable: "Foundation (A1) Yoruba content and audio recordings.",
      color: "orange",
    },
    {
      milestone: "Content Phase 2",
      // payment: "₦25.0M (10%)",
      payment: " (10%)",
      timing: "Phase 8",
      deliverable: "Elementary (A2) Yoruba content and cultural media.",
      color: "orange",
    },
    {
      milestone: "System Integration",
      // payment: "₦25.0M (10%)",
      payment: " (10%)",
      timing: "Phase 9",
      deliverable: "Full synchronization of apps, backend, and content CMS.",
      color: "amber",
    },
    {
      milestone: "Beta Testing & QA",
      // payment: "₦25.0M (10%)",
      payment: " (10%)",
      timing: "Phase 10",
      deliverable: "Bug fixes, performance tuning, and security audits.",
      color: "amber",
    },
    {
      milestone: "Public Launch",
      // payment: "₦12.5M (5%)",
      payment: " (5%)",
      timing: "Phase 11",
      deliverable: "App Store deployment and live production launch.",
      color: "red",
    },
    {
      milestone: "Post-Launch Ops",
      // payment: "₦12.5M (5%)",
      payment: " (5%)",
      timing: "Phase 12",
      deliverable: "User feedback iteration and 90-day stability support.",
      color: "red",
    },
  ];

  return (
    <div className="space-y-12 py-16 px-4">
      {/* HEADER */}
      <div className="text-center space-y-4">
        {/* <h3 className="text-3xl md:text-5xl font-bold text-amber-900">
          Phased Payment Schedule
        </h3> */}
        <h3 className="text-3xl md:text-5xl font-bold text-amber-900">
          Phased Schedule
        </h3>
        {/* <p className="text-amber-700 max-w-2xl mx-auto text-lg">
          A granular 12-phase investment roadmap totaling ₦250,000,000, ensuring
          transparency and delivery-based funding throughout the lifecycle.
        </p> */}
        <p className="text-amber-700 max-w-2xl mx-auto text-lg">
          A granular 12-phase roadmap ensuring transparency throughout the
          lifecycle of the project.
        </p>
      </div>

      {/* MILESTONE CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {paymentData.map((item, idx) => (
          <>
            <div
              key={idx}
              className="bg-white rounded-lg p-8 border-2 border-amber-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black text-amber-700 uppercase tracking-[0.2em] bg-amber-50 px-3 py-1 rounded-full">
                    {item.timing}
                  </span>
                  <span className="text-2xl font-black text-green-600 tracking-tighter">
                    {item.payment.split(" ")[0]}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {item.milestone}
                </h4>
                <p className="text-amber-800/70 text-sm leading-relaxed mb-4">
                  {item.deliverable}
                </p>
              </div>
              <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest pt-2 border-t border-amber-50">
                {item.payment.split(" ")[1]} Project Share
              </div>
            </div>
          </>
        ))}
      </div>

      {/* CUMULATIVE PROGRESS BAR */}
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-10 border-2 border-amber-100 shadow-sm">
        {/* <h4 className="font-bold text-amber-900 mb-8 text-center text-xl tracking-tight">
          Cumulative Investment Flow
        </h4> */}
        <h4 className="font-bold text-amber-900 mb-8 text-center text-xl tracking-tight">
          Cumulative Flow
        </h4>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-xs font-black text-amber-300">START</span>
            {/* <span className="text-sm font-bold text-amber-600">₦0</span> */}
          </div>

          <div className="flex-1 h-12 bg-amber-50/50 rounded-2xl p-1.5 flex shadow-inner border border-amber-100/50">
            <div className="h-full w-[10%] bg-blue-500 rounded-l-xl flex items-center justify-center text-[10px] text-white font-black">
              10%
            </div>
            <div className="h-full w-[5%] bg-blue-400 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              5%
            </div>
            <div className="h-full w-[5%] bg-purple-500 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              5%
            </div>
            <div className="h-full w-[10%] bg-purple-400 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              10%
            </div>
            <div className="h-full w-[10%] bg-green-500 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              10%
            </div>
            <div className="h-full w-[10%] bg-green-400 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              10%
            </div>
            <div className="h-full w-[10%] bg-orange-500 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              10%
            </div>
            <div className="h-full w-[10%] bg-orange-400 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              10%
            </div>
            <div className="h-full w-[10%] bg-amber-500 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              10%
            </div>
            <div className="h-full w-[10%] bg-amber-400 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              10%
            </div>
            <div className="h-full w-[5%] bg-red-500 flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              5%
            </div>
            <div className="h-full w-[5%] bg-red-400 rounded-r-xl flex items-center justify-center text-[10px] text-white font-black border-l border-white/20">
              5%
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs font-black text-amber-300">END</span>
            {/* <span className="text-xs font-black text-amber-300">TOTAL</span> */}
            {/* <span className="text-sm font-black text-amber-900">₦250M</span> */}
          </div>
        </div>

        <div className="mt-6 flex justify-between px-12 text-[8px] font-black text-amber-500 uppercase tracking-tighter opacity-70">
          <span>Kickoff</span>
          <span>Design</span>
          <span>Develop</span>
          <span>Content</span>
          <span>Beta</span>
          <span>Launch</span>
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const milestones = [
    {
      phase: "Discovery & Planning",
      duration: "Weeks 1-3",
      items: [
        "User research & interviews",
        "Linguistic consultation",
        "Technical architecture",
        "Finalized PRD",
      ],
      icon: <Search className="w-5 h-5" />,
      styles: {
        card: "bg-blue-50/50 border-blue-100",
        badge: "bg-blue-600",
        title: "text-blue-900",
        text: "text-blue-700",
        dot: "bg-blue-500",
        line: "bg-blue-200",
      },
    },
    {
      phase: "Design & Prototyping",
      duration: "Weeks 4-7",
      items: [
        "UI/UX design",
        "Interactive prototype",
        "User testing",
        "Design system",
      ],
      icon: <Palette className="w-5 h-5" />,
      styles: {
        card: "bg-purple-50/50 border-purple-100",
        badge: "bg-purple-600",
        title: "text-purple-900",
        text: "text-purple-700",
        dot: "bg-purple-500",
        line: "bg-purple-200",
      },
    },
    {
      phase: "MVP Development",
      duration: "Weeks 8-24",
      items: [
        "Backend APIs",
        "Mobile apps (iOS/Android)",
        "AI integration",
        "Content creation (A1+A2)",
      ],
      icon: <Settings className="w-5 h-5" />,
      styles: {
        card: "bg-green-50/50 border-green-100",
        badge: "bg-green-600",
        title: "text-green-900",
        text: "text-green-700",
        dot: "bg-green-500",
        line: "bg-green-200",
      },
    },
    {
      phase: "Testing & QA",
      duration: "Weeks 23-26",
      items: [
        "Beta testing (100 users)",
        "Bug fixes",
        "Performance optimization",
        "Security audit",
      ],
      icon: <Microscope className="w-5 h-5" />,
      styles: {
        card: "bg-orange-50/50 border-orange-100",
        badge: "bg-orange-600",
        title: "text-orange-900",
        text: "text-orange-700",
        dot: "bg-orange-500",
        line: "bg-orange-200",
      },
    },
    {
      phase: "Launch",
      duration: "Weeks 27-28",
      items: [
        "App Store submission",
        "Marketing campaign",
        "Public launch",
        "User support setup",
      ],
      icon: <Rocket className="w-5 h-5" />,
      styles: {
        card: "bg-amber-50/50 border-amber-100",
        badge: "bg-amber-600",
        title: "text-amber-900",
        text: "text-amber-700",
        dot: "bg-amber-500",
        line: "bg-amber-200",
      },
    },
    {
      phase: "Post-Launch Growth",
      duration: "Weeks 29-40",
      items: [
        "Monitor & optimize",
        "User feedback iteration",
        "Begin Igbo/Hausa",
        "Scale infrastructure",
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      styles: {
        card: "bg-red-50/50 border-red-100",
        badge: "bg-red-600",
        title: "text-red-900",
        text: "text-red-700",
        dot: "bg-red-500",
        line: "bg-red-200",
      },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="relative">
        {/* The Central Spine */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200"></div>

        <div className="space-y-12 md:space-y-24">
          {milestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative group">
                {/* Central Dot & Number */}
                <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                  <div
                    className={`w-10 h-10 rounded-full border-4 border-white shadow-md ${milestone.styles.dot} flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110 duration-300`}
                  >
                    {idx + 1}
                  </div>
                </div>

                <div
                  className={`flex flex-col md:flex-row items-center justify-between ${isEven ? "" : "md:flex-row-reverse"}`}
                >
                  {/* The Card */}
                  <div className="w-full md:w-[45%]">
                    <div
                      className={`relative ${milestone.styles.card} backdrop-blur-sm p-8 rounded-4xl border-2 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1`}
                    >
                      {/* Horizontal Branch Line (Desktop only) */}
                      <div
                        className={`hidden md:block absolute top-0 w-8 h-px ${milestone.styles.line} ${isEven ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}
                      ></div>

                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`${milestone.styles.badge} text-white px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase`}
                        >
                          Phase {idx + 1}
                        </div>
                        <div className={`${milestone.styles.text} opacity-40`}>
                          {milestone.icon}
                        </div>
                      </div>

                      <h3
                        className={`text-2xl font-bold ${milestone.styles.title} mb-2 tracking-tight`}
                      >
                        {milestone.phase}
                      </h3>

                      <div
                        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${milestone.styles.text} mb-6 opacity-80`}
                      >
                        <Clock className="w-3.5 h-3.5" /> {milestone.duration}
                      </div>

                      <ul className="grid grid-cols-1 gap-3">
                        {milestone.items.map((item, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-3 text-sm leading-relaxed ${milestone.styles.text} group/item`}
                          >
                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for the other side on Desktop */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
      {/* SECTION 1: HEADER */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
          Clear Path to Launch
        </h2>
        <p className="text-xl text-amber-800 max-w-3xl mx-auto">
          10-month timeline from start to public launch with defined milestones.
        </p>
      </div>

      {/* SECTION 2: VISUAL TIMELINE */}
      <TimelineSection />

      {/* SECTION 3: SUMMARY BANNER */}
      <div className="text-center">
        <div className="inline-block bg-linear-to-r from-amber-600 to-orange-600 rounded-3xl p-10 text-white shadow-2xl">
          <div className="text-6xl font-black mb-2 tracking-tighter">
            42 Weeks
          </div>
          <div className="text-2xl text-amber-100 mb-6 font-medium">
            From Contract to Public Launch
          </div>
          <p className="text-sm text-amber-200 max-w-md mx-auto leading-relaxed">
            Every week of delay is another week learners wait for this solution.
          </p>
        </div>
      </div>

      {/* SECTION 4: PAYMENT MILESTONES */}
      <PaymentMilestones />

      {/* SECTION 5: TEAM REQUIREMENTS */}
      <div className="space-y-10">
        <h3 className="text-3xl font-bold text-amber-900 text-center">
          Team Requirements
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dev Team */}
          <div className="bg-linear-to-br from-blue-50 to-white rounded-3xl p-8 border-2 border-blue-100 shadow-sm">
            <h4 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
              <Code className="w-8 h-8" /> Development Team
            </h4>
            <div className="space-y-4">
              {[
                { role: "Product Manager", count: "1", phase: "All phases" },
                { role: "Backend Engineers", count: "2", phase: "Weeks 8-24" },
                { role: "iOS Developers", count: "2", phase: "Weeks 12-22" },
                {
                  role: "Android Developers",
                  count: "2",
                  phase: "Weeks 12-22",
                },
                { role: "DevOps Engineer", count: "1", phase: "Weeks 8-24" },
                { role: "QA Engineers", count: "3", phase: "Weeks 23-26" },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center pb-4 border-b border-blue-50 last:border-0"
                >
                  <div>
                    <div className="font-bold text-blue-900">{member.role}</div>
                    <div className="text-xs text-blue-500 font-medium uppercase tracking-wider">
                      {member.phase}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center font-black text-blue-700">
                    {member.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Content Team */}
          <div className="bg-linear-to-br from-purple-50 to-white rounded-3xl p-8 border-2 border-purple-100 shadow-sm">
            <h4 className="text-2xl font-bold text-purple-900 mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8" /> Content & Design Team
            </h4>
            <div className="space-y-4">
              {[
                { role: "UX/UI Designers", count: "2", phase: "Weeks 4-7" },
                { role: "Linguists", count: "3", phase: "Weeks 1-20" },
                { role: "Content Writers", count: "5", phase: "Weeks 8-20" },
                { role: "Voice Actors", count: "3", phase: "Weeks 13-20" },
                { role: "Cultural Consultants", count: "3", phase: "Ongoing" },
                {
                  role: "Technical Architect",
                  count: "1",
                  phase: "Part-time oversight",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center pb-4 border-b border-purple-50 last:border-0"
                >
                  <div>
                    <div className="font-bold text-purple-900">
                      {member.role}
                    </div>
                    <div className="text-xs text-purple-500 font-medium uppercase tracking-wider">
                      {member.phase}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center font-black text-purple-700">
                    {member.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: DELIVERABLES PACKAGE */}
      <div className="bg-linear-to-br from-amber-50 to-white rounded-[3rem] p-10 md:p-16 border-4 border-amber-100 shadow-sm">
        <h3 className="text-3xl font-bold text-amber-900 mb-12 text-center">
          Complete Deliverables Package
        </h3>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-xl font-black text-amber-900 mb-6 flex items-center gap-3">
              <Smartphone className="w-6 h-6" /> Mobile Apps
            </h4>
            <ul className="space-y-4">
              {[
                "Native iOS app (Swift)",
                "Native Android app (Kotlin)",
                "App Store listings ready",
                "Complete source code",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-amber-800 text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black text-amber-900 mb-6 flex items-center gap-3">
              <Database className="w-6 h-6" /> Infrastructure
            </h4>
            <ul className="space-y-4">
              {[
                "Scalable API backend",
                "AWS cloud infrastructure",
                "Database architecture",
                "AI/ML integrations",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-amber-800 text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-black text-amber-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6" /> Content
            </h4>
            <ul className="space-y-4">
              {[
                "60+ lessons (A1-A2) Yoruba",
                "Professional audio recordings",
                "Technical documentation",
                "Admin content CMS",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-amber-800 text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
