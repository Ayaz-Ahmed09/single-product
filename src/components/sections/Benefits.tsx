"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  "Visibly firmer and fuller breasts in 30 days",
  "Improved skin elasticity and smoothness",
  "Enhanced confidence and self-esteem",
  "Natural alternative to surgical procedures",
  "100% safe with no harmful side effects",
  "Clinically tested and dermatologist approved",
];

export default function Benefits() {
  return (
    <section className="section-padding bg-secondary-900 p-6">
      <div className="container-custom p-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="hero-text-gradient">Why Choose Our Cream?</span>
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="btn text-lg">Start Your Transformation</button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden">
              <div
                className="absolute inset-0  opacity-20 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #FF1493 30%, #FF69B4 100%)",
                }}
              ></div>
              <Image
                src="/images/product-2.jpg"
                alt="Happy confident woman"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-primary-500 rounded-2xl p-4 text-center shadow-2xl">
              <p className="text-2xl font-bold text-white">30</p>
              <p className="text-xs text-white/80">Days</p>
            </div>

            <div className="absolute bottom-4 left-4  rounded-2xl p-4 text-center shadow-2xl">
              <p className="text-lg font-bold text-black">95%</p>
              <p className="text-xs text-black/60">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
