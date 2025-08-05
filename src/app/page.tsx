import Hero from "@/components/sections/Hero";
import WhyDoctorsRecommend from "@/components/sections/WhyDoctorsRecommend";
import Ingredients from "@/components/sections/Ingredients";
import HowItWorks from "@/components/sections/HowItWorks";
import DoctorAdvice from "@/components/sections/DoctorAdvice";
import HowToUse from "@/components/sections/HowToUse";
import Advantages from "@/components/sections/Advantages";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ProductBanner from "@/components/sections/ProductBanner";
import Footer from "@/components/sections/Footer";
import DiscountBanner from "@/components/sections/DiscountBanner";
import MobileOfferBanner from "@/components/sections/Mobileofferbanner";
import MobileTrustBanner from "@/components/sections/MobileTrustBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-black place-items-center overflow-x-hidden">
      <Hero />
      <DiscountBanner />
      <ProductBanner type="horizontal" />
      <WhyDoctorsRecommend />
      <Ingredients />
      <ProductBanner type="horizontal" />
      <HowItWorks />
      <DoctorAdvice />
      <HowToUse />
      <Advantages />
      <Benefits />
      <Testimonials />
      <MobileTrustBanner />
      <FAQ />
      <Footer />
      <ProductBanner type="vertical-left" />
      <MobileOfferBanner />
      <ProductBanner type="vertical-right" />
    </main>
  );
}
