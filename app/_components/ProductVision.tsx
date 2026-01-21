import React from "react";
import Image from "next/image";
import { Globe, Smartphone, Wifi, Zap } from "lucide-react";

const ProductVision = () => {
  // Use the absolute path relative to the 'public' folder
  const productImage = "/visions.png";

  return (
    <section id="product" className="py-24 px-6 bg-[#FDF8F1]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#3D2314] mb-6">
            World-Class EdTech.{" "}
            <span className="text-amber-700">African Soul.</span>
          </h2>
          <p className="text-xl text-[#5D4037] max-w-2xl mx-auto leading-relaxed">
            A Duolingo-caliber experience, reimagined through African heritage.
          </p>
        </div>

        {/* Central Visual */}
        <div className="relative mb-24 flex justify-center">
          <div className="relative group w-full max-w-5xl aspect-[16/9]">
            <div className="absolute -inset-4 bg-amber-200/30 rounded-[3rem] blur-2xl group-hover:bg-amber-300/40 transition-all duration-700"></div>

            {/* Next.js Optimized Image */}
            <Image
              src={productImage}
              alt="InstaGrowth Suite African EdTech Interface"
              fill
              priority
              className="relative rounded-3xl shadow-2xl border-4 border-[#3D2314]/10 object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Smartphone, label: "Mobile-first design", color: "blue" },
            { icon: Wifi, label: "Offline capable", color: "green" },
            { icon: Zap, label: "Low-bandwidth optimized", color: "purple" },
            { icon: Globe, label: "Culturally authentic", color: "amber" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-${item.color}-50 rounded-xl p-6 border-2 border-${item.color}-200 text-center hover:scale-105 transition-transform`}
            >
              <item.icon
                className={`w-8 h-8 text-${item.color}-600 mx-auto mb-3`}
              />
              <div className={`text-${item.color}-900 font-semibold`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Core Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-amber-900 mb-2">
                Educational Excellence
              </h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                Proven language acquisition science (comprehensible input,
                spaced repetition) combined with African pedagogical traditions
                like oral storytelling.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-amber-900 mb-2">
                Cultural Authenticity
              </h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                Every lesson incorporates proverbs, cultural context, and social
                norms. Language cannot be separated from culture.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-amber-900 mb-2">
                Accessibility First
              </h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                Free core learning path, works offline, optimized for budget
                Android phones. No one left behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVision;
