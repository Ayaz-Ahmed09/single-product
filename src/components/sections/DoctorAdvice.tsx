import Image from "next/image";
import { Quote } from "lucide-react";

export default function DoctorAdvice() {
  return (
    <div className="container-custom p-6">
      <div className="max-w-4xl mx-auto p-2">
        <div className=" rounded-3xl p-8 md:p-12 border border-rose-500 relative overflow-hidden">
          {/* Background decoration */}
          {/* <div className="absolute top-0 right-0 w-32 h-32  rounded-full blur-3xl"></div> */}

          <div className="relative z-10 ">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/images/3.jpeg"
                    alt="Dr. Sarah Johnson, Board Certified Dermatologist"
                    fill
                    className="object-cover rounded-full border-4 border-rose-500"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </div> */}

              <div className="flex-1 text-center md:text-left">
                <Quote className="w-12 h-12 text-primary-500 mb-4 mx-auto md:mx-0" />
                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                  &quot;After reviewing the clinical studies and ingredient
                  profile, I can confidently recommend this breast enhancement
                  cream to my patients seeking natural alternatives.&quot;
                </blockquote>

                <div className="space-y-2">
                  <p className="text-rose-500 font-semibold text-lg">
                    Dr. Sarah Johnson
                  </p>
                  <p className="text-white">Board Certified Dermatologist</p>
                  <p className="text-gray-100 text-sm">
                    15+ years of experience in cosmetic dermatology
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-rose-500">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-white">95%</p>
                  <p className="text-pink-900 text-sm">Patient Satisfaction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">30 Days</p>
                  <p className="text-pink-900 text-sm">Visible Results</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">0%</p>
                  <p className="text-pink-900 text-sm">Side Effects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
