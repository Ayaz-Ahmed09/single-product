import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="section-padding bg-black px-4 py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FF1493 50%, #FF69B4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              How Does RtopR Cream Work?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text and Benefits */}
          <div className="rounded-3xl p-6 md:p-10 border border-pink-500">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-center md:text-left">
              <p>
                Your breast cells absorb the natural ingredients from the cream
                through your skin. This stimulates the growth of your bust cells
                and the formation of new tissue.
              </p>
              <p>
                The cream also enhances the blood flow in your breasts, which
                contributes to permanent enhancement over time.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧴</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Absorption</h3>
                  <p className="text-gray-400 text-sm">
                    Natural ingredients penetrate skin
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Stimulation</h3>
                  <p className="text-gray-400 text-sm">
                    Triggers breast tissue cell growth
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Enhancement</h3>
                  <p className="text-gray-400 text-sm">
                    Permanent size and shape improvement
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/images/howitwork.jpg" // 👉 Replace with your image path
              alt="How RtopR Cream Works"
              fill
              className="object-cover rounded-3xl shadow-lg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
