export default function DiscountBanner() {
  return (
    <section className="bg-gradient-to-r from-pink-600/10 to-pink-400/10 border-y border-pink-500/20 py-6 px-4">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left: Text & Price */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            🔥 Limited Time Offer on RtopR Cream!
          </h3>
          <p className="text-lg text-gray-300">
            Original Price:{" "}
            <span className="line-through text-red-500 font-semibold mr-2">
              ₨10,000
            </span>
            Now Only:{" "}
            <span className="text-pink-400 text-2xl font-bold">₨6,500</span>
          </p>
        </div>

        {/* Right: Discount Badge */}
        <div className="relative">
          <div className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-bounce">
            Save 40% Now!
          </div>
        </div>
      </div>
    </section>
  );
}
