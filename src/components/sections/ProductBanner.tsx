import Image from "next/image";

interface ProductBannerProps {
  type: "horizontal" | "vertical-left" | "vertical-right";
}

export default function ProductBanner({ type }: ProductBannerProps) {
  // Vertical Left Banner (Desktop only)
  if (type === "vertical-left") {
    return (
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-b from-pink-500/10 to-pink-400/10 rounded-2xl p-4 border w-52 h-[800px] flex flex-col items-center justify-center">
          <Image
            src="/images/v1.jpg"
            width={300}
            height={800}
            alt="Vertical Left Ad"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    );
  }

  // Vertical Right Banner (Desktop only)
  if (type === "vertical-right") {
    return (
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-b from-pink-500/10 to-pink-400/10 rounded-2xl p-4 border  w-52 h-[800px] flex flex-col items-center justify-center">
          <Image
            src="/images/v2.jpg"
            width={300}
            height={800}
            alt="Vertical Right Ad"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    );
  }

  // Horizontal Banner (Shown on all screens, especially mobile)
  return (
    <section className="py-6 bg-secondary-900 border-y border-pink-500/10 block lg:hidden">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-pink-500/10 to-pink-400/10 rounded-2xl p-4 border border-pink-500/20 w-full max-w-3xl mx-auto">
          <Image
            src="/images/b1.jpg"
            width={800}
            height={200}
            alt="Mobile Ad Banner"
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
