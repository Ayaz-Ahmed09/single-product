import {
  Leaf,
  Shield,
  Sparkles,
  Heart,
  Zap,
  Star,
  Apple,
  Droplets,
} from "lucide-react";
import Image from "next/image";

const ingredients = [
  {
    name: "Mangifera Indica (Mango) Seed Oil",
    description:
      "Rich in natural compounds that nourish and enhance breast tissue",
    icon: Leaf,
    percentage: "Key",
  },
  {
    name: "Guajava Fruit Extract",
    description:
      "Natural antioxidants that support healthy skin and tissue growth",
    icon: Shield,
    percentage: "Active",
  },
  {
    name: "Glycerin",
    description: "Moisturizes and helps maintain skin elasticity",
    icon: Sparkles,
    percentage: "Base",
  },
  {
    name: "Collagen",
    description: "Improves skin elasticity and firmness for better shape",
    icon: Heart,
    percentage: "Active",
  },
  {
    name: "Mineral Oil",
    description: "Provides deep moisturization and smooth application",
    icon: Zap,
    percentage: "Base",
  },
  {
    name: "Dimethicone",
    description: "Creates protective barrier and enhances cream absorption",
    icon: Star,
    percentage: "Active",
  },
  {
    name: "Xanthan Gum",
    description: "Natural thickener that ensures smooth, even application",
    icon: Apple,
    percentage: "Base",
  },
  {
    name: "Aqua",
    description: "Pure water base for optimal ingredient delivery",
    icon: Droplets,
    percentage: "Base",
  },
];

export default function Ingredients() {
  return (
    <section className="section-padding bg-black px-4 py-16 items-center relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="  text-4xl md:text-5xl font-bold mb-6">
            <span
              style={{
                background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="absolute inset-0 rounded-full blur-xl opacity-30 bg-gradient-to-r from-[#FF1493] to-[#FF69B4] animate-pulse"
            >
              RtopR Natural Ingredients
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            RtopR&apos;s formula consists of 13 natural ingredients like Mango
            Seed Oil and collagen. These components work synergistically to
            stimulate breast tissue growth and improve the skin&apos;s
            elasticity.
          </p>
        </div>

        {/* Grid Layout for Ingredients and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Ingredient Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {ingredients.map((ingredient) => {
              const Icon = ingredient.icon;
              return (
                <div
                  key={ingredient.name}
                  className="bg-secondary-900 rounded-2xl p-6 border border-pink-500 hover:border-rose-300 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#FF1493]/20 rounded-xl flex items-center justify-center group-hover:bg-pink-100 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <span className="text-primary-500 font-bold text-lg">
                      {ingredient.percentage}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {ingredient.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {ingredient.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Product Image */}
          <div className="relative w-full h-[700px] max-w-[450px] mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-pink-500 shadow-2xl">
            <Image
              src="/images/ing.jpg" // 🔁 Replace with your actual image path
              alt="RtopR Cream Natural Ingredients"
              fill
              className="object-cover rounded-3xl"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </div>
        </div>

        {/* Bottom Highlight Box */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-pink-400/10 rounded-2xl p-8 border border-rose-500/20">
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              13 Natural Ingredients - 100% Safe
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              All 13 natural ingredients are carefully sourced and tested for
              purity. The use of natural ingredients ensures safety and
              minimizes the risk of adverse effects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
