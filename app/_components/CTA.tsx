// import { Download, Send } from "lucide-react";

const CTA = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      {/* <div className="mb-8">
        <div className="inline-block w-20 h-20 bg-linear-to-br from-amber-600 to-orange-700 rounded-2xl items-center justify-center mb-6 mx-auto">
          <Languages className="w-10 h-10 text-white" />
        </div>
      </div> */}

      <h2 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
        {` Let's Build This Together`}
      </h2>

      <p className="text-xl text-amber-800 mb-8 leading-relaxed">
        This platform will enable millions to connect with their heritage,
        preserve languages for future generations, and prove that
        African-focused EdTech is viable and valuable.
      </p>

      <p className="text-2xl text-amber-900 font-bold mb-12">
        {`You're not just building an app.`}
        <br />
        {`You're building a movement.`}
      </p>

      <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 mb-12">
        <h3 className="text-2xl font-bold text-amber-900 mb-6">Next Steps</h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h4 className="font-bold text-amber-900 mb-1">Review</h4>
              <p className="text-amber-700 text-sm">
                Read this proposal. Note questions.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h4 className="font-bold text-amber-900 mb-1">Discuss</h4>
              <p className="text-amber-700 text-sm">
                Schedule 90-minute deep-dive call.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <h4 className="font-bold text-amber-900 mb-1">Start</h4>
              <p className="text-amber-700 text-sm">
                Sign contracts. Begin Week 1.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button
          onClick={() => (window.location.href = "mailto:your@email.com")}
          className="bg-amber-900 hover:bg-amber-800 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-xl"
        >
          <Send className="w-6 h-6" />
          Schedule Discovery Call
        </button>
        <button className="bg-white hover:bg-amber-50 text-amber-900 px-10 py-5 rounded-lg font-bold text-xl transition-all flex items-center justify-center gap-3 border-2 border-amber-900">
          <Download className="w-6 h-6" />
          Download Full Proposal
        </button>
      </div> */}

      <div className="text-amber-700 italic text-lg border-l-4 border-amber-600 pl-6 py-4 max-w-2xl mx-auto">
        {`  "The best time to preserve a language was 20 years ago.`}
        <br />
        {`The second best time is now."`}
      </div>
    </div>
  );
};

export default CTA;
