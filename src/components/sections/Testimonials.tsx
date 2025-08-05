"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma Rodriguez",
    age: 28,
    location: "Miami, FL",
    rating: 5,
    text: "I've tried many products before, but this cream actually delivered results! After 6 weeks, I noticed a significant difference in firmness and fullness.",
    image: "/image/1.jpg",
    result: "Increased 1 cup size",
  },
  {
    name: "Sarah Chen",
    age: 32,
    location: "Los Angeles, CA",
    rating: 5,
    text: "The natural ingredients gave me peace of mind, and the results speak for themselves. My confidence has never been higher!",
    image: "/image/2.jpeg",
    result: "Firmer texture in 4 weeks",
  },
  {
    name: "Jessica Taylor",
    age: 26,
    location: "New York, NY",
    rating: 5,
    text: "Amazing product! The cream absorbs quickly and doesn't leave any residue. I've recommended it to all my friends.",
    image: "/image/3.jpeg",
    result: "Noticeable enhancement",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-black pt-6 p-6">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text-gradient">Real Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thousands of women have transformed their confidence with our
            natural enhancement cream.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <TestimonialCard testimonial={testimonials[currentIndex]} />

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-pink-200 rounded-full hover:bg-pink-500 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-pink-700" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-pink-600-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-pink-500 rounded-full hover:bg-pink-500 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-pink-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className=" rounded-2xl p-8 border border-pink-500 hover:border-pink-500 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        &quot;{testimonial.text}&quot;
      </p>

      <div className="flex items-center lg:gap-8 space-x-4">
        {/* <div className="relative w-12 h-12">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover rounded-full"
            sizes="48px"
          />
        </div> */}
        <div>
          <p className="text-white font-semibold">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">
            {testimonial.age} • {testimonial.location}
          </p>
          <p className="text-pink-500 text-sm font-medium">
            {testimonial.result}
          </p>
        </div>
      </div>
    </div>
  );
}
