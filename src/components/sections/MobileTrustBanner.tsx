export default function MobileTrustBanner() {
  return (
    <div className="block lg:hidden mt-10 px-4">
      <div className="bg-gradient-to-r from-black- to-gray-700 border border-pink-500/20 rounded-2xl p-4 space-y-3">
        <img
          src="/images/g.jpg"
          alt="Doctor Approved Safe Cream"
          className="w-full h-50 object-contain rounded-xl"
        />

        <div className="text-center text-sm text-gray-300">
          <strong className="text-green-400">Doctor Approved</strong> – 13
          natural ingredients. No side effects. 100% Safe for daily use.
        </div>

        <div className="text-center text-xs text-gray-400 mt-3">
          <div className="text-sm font-semibold text-green-300 mb-2">
            🌍 Trusted Globally
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 text-gray-200">
            <span className="flex items-center gap-1">
              🇨🇳 <span className="text-xs">China</span>
            </span>
            <span className="flex items-center gap-1">
              🇷🇺 <span className="text-xs">Russia</span>
            </span>
            <span className="flex items-center gap-1">
              🇺🇸 <span className="text-xs">USA</span>
            </span>
            <span className="flex items-center gap-1">
              🇸🇦 <span className="text-xs">Saudi Arabia</span>
            </span>
            <span className="flex items-center gap-1">
              🇵🇰 <span className="text-xs">Pakistan</span>
            </span>
            <span className="flex items-center gap-1">
              🇮🇳 <span className="text-xs">India</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
