import {
  Check,
  Heart,
  Shield,
  DollarSign,
  Zap,
  Sparkles,
  Users,
  Leaf,
} from "lucide-react";

const advantages = [
  {
    title: "Increase your breast size and shape",
    description: "Natural enhancement for fuller, more attractive breasts",
    icon: Heart,
  },
  {
    title: "Reduce sagging and Improve your boob's tightness",
    description: "Firmer, more lifted appearance with improved elasticity",
    icon: Zap,
  },
  {
    title: "Safe and Easy to use at home",
    description: "No need for expensive clinic visits or procedures",
    icon: Shield,
  },
  {
    title: "13 natural ingredients are included in RtopR breast cream",
    description: "Carefully selected natural components for optimal results",
    icon: Leaf,
  },
  {
    title: "Cost-effective compared to surgery",
    description: "Affordable alternative to expensive surgical procedures",
    icon: DollarSign,
  },
  {
    title: "Naturally, increased estrogen",
    description: "Supports natural hormonal balance for breast development",
    icon: Sparkles,
  },
  {
    title: "Improve boob's skin texture",
    description: "Smoother, softer skin with enhanced appearance",
    icon: Users,
  },
  {
    title: "Promote new healthy fat tissue",
    description: "Encourages natural tissue growth for permanent results",
    icon: Check,
  },
];

export default function Advantages() {
  return (
    <section className="section-padding p-6">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text-gradient">
              Advantages Of Using RtopR Cream
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            There are several advantages to using RtopR&apos;s breast-increasing
            cream for natural enhancement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-black rounded-2xl p-6 border border-pink-500 hover:border-rose-500 transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto group-hover:bg-pink-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="btn text-lg">Experience All These Benefits</button>
        </div>
      </div>
    </section>
  );
}
