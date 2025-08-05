"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is RtopR cream suitable for all skin types?",
    answer:
      "Yes, RtopR is designed to be safe for all skin types, but make sure to use a small amount of cream to test your skin's reaction first.",
  },
  {
    question: "How long should I use RtopR to see significant results?",
    answer:
      "Most users see noticeable changes after a few weeks, with full results typically achieved after 1 month of consistent use.",
  },
  {
    question: "Can I use RtopR if I've had breast surgery in the past?",
    answer:
      "Consult with a healthcare professional if you have had breast surgery before using RtopR. It's important to get medical clearance first.",
  },
  {
    question: "Is RtopR cream affordable compared to surgery?",
    answer:
      "Yes, RtopR is a more cost-effective option compared to surgical procedures, offering natural enhancement at a fraction of the cost.",
  },
  {
    question: "How does RtopR work to increase breast size?",
    answer:
      "RtopR's natural ingredients are absorbed through your skin, stimulating breast tissue cell growth and enhancing blood flow for gradual, permanent enhancement.",
  },
  {
    question: "What makes RtopR different from other creams?",
    answer:
      "RtopR contains 13 natural ingredients including mango seed oil and collagen, specifically formulated for permanent results with minimal risk of side effects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding p-6">
      <div className="container-custom p-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text-gradient">
              Frequently Asked Questions about RtopR
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about RtopR breast
            enhancement cream.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl border border-pinky-500 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-pink-400k transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-pink-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-pink-500" />
                  )}
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden p-4`}
              >
                <div className="p-6 pb-2 border-t border-pink-500">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-pink-400/5 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our customer support team is here to help you make the best
              decision for your enhancement journey.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
