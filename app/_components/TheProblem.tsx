import { AlertCircle, BookOpen, Globe, Users } from "lucide-react";

const TheProblem = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        {`The Crisis We're Solving`}
      </h2>
      <p className="text-xl text-amber-100 mb-16 text-center max-w-3xl mx-auto">
        African languages face digital erasure while millions desperately seek
        learning resources.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-amber-800/50 backdrop-blur rounded-xl p-8 border border-amber-700">
          <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Digital Erasure</h3>
          <p className="text-amber-100 leading-relaxed mb-4">
            Major language platforms ignore or poorly support African languages,
            treating them as afterthoughts rather than living cultures.
          </p>
          <ul className="space-y-2 text-amber-200 text-sm">
            <li>• Duolingo: Limited Yoruba beta, basic Hausa, zero Igbo</li>
            <li>• Babbel/Rosetta Stone: No African language support</li>
            <li>• Memrise: User-generated content only (inconsistent)</li>
          </ul>
        </div>

        <div className="bg-amber-800/50 backdrop-blur rounded-xl p-8 border border-amber-700">
          <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Generational Disconnect</h3>
          <p className="text-amber-100 leading-relaxed mb-4">
            {`In Lagos, 60% of urban youth cannot hold conversations in their
                parents' native language, severing cultural bonds.`}
          </p>
          <ul className="space-y-2 text-amber-200 text-sm">
            <li>• Language erosion accelerating among young generations</li>
            <li>• Grandparents unable to communicate with grandchildren</li>
            <li>• Traditional knowledge and proverbs being lost</li>
          </ul>
        </div>

        <div className="bg-amber-800/50 backdrop-blur rounded-xl p-8 border border-amber-700">
          <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Fragmented Resources</h3>
          <p className="text-amber-100 leading-relaxed mb-4">
            Learners face scattered YouTube videos, expensive tutors
            (₦5,000-15,000/hour), or outdated textbooks.
          </p>
          <ul className="space-y-2 text-amber-200 text-sm">
            <li>• No centralized, high-quality digital solution exists</li>
            <li>• Inconsistent pronunciation and grammar across sources</li>
            <li>• No structured progression or skill verification</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-900/30 backdrop-blur rounded-xl p-8 border-2 border-red-700">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-bold mb-4">The Stakes Are High</h3>
            <p className="text-amber-100 leading-relaxed mb-4">
              Without intervention, these languages risk following the path of
              hundreds of African languages that have already disappeared. Each
              lost language represents centuries of cultural wisdom, unique ways
              of understanding the world, and irreplaceable human heritage.
            </p>
            <p className="text-amber-100 leading-relaxed">
              {`This platform is not just a business opportunity—it's cultural
                  infrastructure for preserving African linguistic diversity in
                  the digital age.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProblem;
