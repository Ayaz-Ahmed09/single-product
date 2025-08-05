import { Tag, Flame } from "lucide-react";

export default function MobileOfferBanner() {
  return (
    <div className="block lg:hidden mt-10 px-4">
      <div className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-pink-400/10 p-4 shadow-md">
        {/* Background texture using gradient circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl opacity-20"></div>

        {/* Discount Icons */}
        <div className="flex justify-center items-center gap-3 mb-3 z-10 relative">
          <Tag className="w-5 h-5 text-pink-400" />
          <Flame className="w-5 h-5 text-pink-400" />
        </div>

        {/* Offer Text */}
        <div className="text-center text-sm text-gray-300 z-10 relative">
          <span className="inline-block bg-pink-500 text-white text-xs px-2 py-1 rounded-full mb-2 shadow-md">
            🔥 Hot Deal - Limited Time
          </span>
          <p>
            <strong className="text-pink-400 drop-shadow-sm">Now only:</strong>{" "}
            <span className="line-through text-gray-500">₨10,000</span>{" "}
            <span className="text-pink-500 font-extrabold text-lg tracking-wide drop-shadow-[0_0_6px_rgba(255,105,180,0.6)]">
              ₨6,000
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
