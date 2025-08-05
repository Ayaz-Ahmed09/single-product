const steps = [
  {
    number: "01",
    title: "Cleanse",
    description:
      "Start by washing your breasts and gently patting them dry. Clean skin is essential for the cream to work effectively.",
    time: "2 min",
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Take a small amount of RtopR cream and put it on your breasts. A little goes a long way.",
    time: "3-5 min",
  },
  {
    number: "03",
    title: "Massage",
    description:
      "Gently massage the cream into your skin in a circular motion until it's fully absorbed. This helps the cream work its magic.",
    time: "5 min",
  },
  {
    number: "04",
    title: "Twice a Day",
    description:
      "For the best results, use the cream twice a day – once in the morning and once before bedtime.",
    time: "2x Daily",
  },
  {
    number: "05",
    title: "Track Progress",
    description:
      "Monitor your enhancement journey and track your progress weekly for consistent results.",
    time: "Weekly",
  },
];

export default function HowToUse() {
  return (
    <section className="section-padding bg-black p-3">
      <div className="container-custom p-3">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text-gradient">How to Apply RtopR Cream</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To achieve the best results with RtopR, follow these simple steps
            for maximum effectiveness and optimal results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-4 h-0.5 bg-gradient-to-r from-pink-500 to-transparent z-0"></div>
              )}

              <div className="relative z-10 rounded-2xl p-6 border border-rose-500 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 h-full">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-pink-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center justify-center bg-pink-500 rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">
                      {step.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Watch Application Tutorial
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-secondary-900 rounded-2xl p-8 border border-rose-500">
              <video
                className="w-full h-64 bg-black rounded-xl"
                controls
                poster="/images/howtouse.jpg"
              >
                <source src="/images/howtouse.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-gray-400 text-sm mt-4">
                45-second tutorial on proper application technique
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center p-6">
          <div className="bg-pink-500 rounded-2xl p-8 border border-primary-500/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Pro Tip</h3>
            <p className="text-gray-300 text-lg">
              Most users see noticeable changes after a few weeks, with full
              results typically achieved after 1 month of consistent use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
