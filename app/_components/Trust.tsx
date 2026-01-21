import { Code, GraduationCap, Users } from "lucide-react";

const Trust = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
        Built for Success
      </h2>
      <p className="text-xl text-amber-800 mb-16 text-center max-w-3xl mx-auto">
        {`This isn't just a proposal—it's a proven execution plan backed by
            deep expertise.`}
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200 text-center hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-amber-900 mb-3">
            Deep Research
          </h3>
          <p className="text-amber-700 text-sm leading-relaxed">
            This proposal represents 100+ hours of research into language
            learning pedagogy, African linguistics, EdTech best practices, and
            technical architecture.
          </p>
        </div>

        <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200 text-center hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-amber-900 mb-3">
            Technical Excellence
          </h3>
          <p className="text-amber-700 text-sm leading-relaxed">
            Built on proven technologies. Scalable architecture from day one.
            Performance optimized for African connectivity realities. Security
            and privacy by design.
          </p>
        </div>

        <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200 text-center hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-amber-900 mb-3">
            Partnership Mindset
          </h3>
          <p className="text-amber-700 text-sm leading-relaxed">
            {`  We're not just vendors—we're partners in your vision.
                Transparent communication, collaborative problem-solving, shared
                commitment to success.`}
          </p>
        </div>
      </div>

      <div className="bg-linear-to-r from-amber-900 to-orange-900 rounded-2xl p-12 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Our Commitment</h3>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-amber-100 text-sm">
              Transparent Communication
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Weekly</div>
            <div className="text-amber-100 text-sm">Progress Updates</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">On-Time</div>
            <div className="text-amber-100 text-sm">Milestone Delivery</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Quality</div>
            <div className="text-amber-100 text-sm">No Compromises</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
