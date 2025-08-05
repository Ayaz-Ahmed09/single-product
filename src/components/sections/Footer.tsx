import { Heart, Shield, Award, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-pink-500 p-4">
      {/* Trust badges */}
      <div className="container-custom py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold">Natural & Safe</h3>
            <p className="text-gray-400 text-sm">100% natural ingredients</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-white font-semibold">Money Back Guarantee</h3>
            <p className="text-gray-400 text-sm">30-day return policy</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-white  font-semibold">Doctor Approved</h3>
            {/* <Check className="text-white" /> */}
            <p className="text-gray-400 text-sm">Clinically tested formula</p>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-white font-semibold">Fast Results</h3>
            <p className="text-gray-400 text-sm">Visible in 30 days</p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-pink-500 p-6">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                RtopR Enhancement
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Transform your confidence with RtopR natural breast enhancement
                cream. Safe, effective, and made with 13 natural ingredients for
                permanent results.
              </p>
              <button className="btn">Order RtopR Now</button>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#ingredients"
                    className="hover:text-primary-500 transition-colors duration-300"
                  >
                    Ingredients
                  </a>
                </li>
                <li>
                  <a
                    href="#how-to-use"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    How to Use
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-pink-500 p-4">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 Premium Enhancement. All rights reserved.</p>
            <p>
              Made with <Heart className="w-4 h-4 text-pink-500 inline mx-1" />{" "}
              for your confidence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
