import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollY = 10; // Update with actual scroll logic if needed

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-14 bg-cover bg-center"
      id="hero"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #000000 0%, #1a0a1a 50%, #000000 100%)",
      }}
    >
      {/* Parallax Background Elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Glowing Pink Circles */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-float"
          style={{
            background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-48 h-48 rounded-full blur-3xl animate-float"
          style={{
            background: "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-2xl animate-pulse-slow"
          style={{ backgroundColor: "#FF1493" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="absolute top-0 left-0 right-0 z-50 bg-red-600 text-white text-center text-sm md:text-base font-semibold py-2 px-4 shadow-md">
              🔥 Limited Imported Stock! Don’t Miss Out – Contact Us Now by
              Pressing{" "}
              <span className="underline underline-offset-2">Buy Now</span>{" "}
              Button Below!
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  RtopR Mango
                </span>
                <br />

                <span className="text-white">Breast Enhancement Cream</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                Natural and best breast enlargement cream for permanent results
                with 13 natural ingredients including mango seed oil.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/923096194974?text=Hi%2C%20I%20want%20to%20order%20RtopR%20Cream."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#FF1493] text-white font-semibold py-4 px-8 rounded-full hover:bg-pink-600 transition-all duration-300 text-lg">
                  Order RtopR Now
                </button>
              </a>

              {/* <button className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Learn More
              </button> */}
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#FF1493" }}
                ></div>
                <span>Permanent Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#FF1493" }}
                ></div>
                <span>13 Natural Ingredients</span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#FF1493" }}
                ></div>
                <span>Doctor Approved</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 md:w-96 md:h-[450px]">
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"
                style={{
                  background:
                    "linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)",
                }}
              ></div>
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-[#FF1493]">
                <Image
                  src="/images/hero1.jpg"
                  alt="RtopR Mango Breast Enhancement Cream"
                  fill
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" style={{ color: "#FF1493" }} />
      </div>
    </section>
  );
}
