import Layout from "../../components/layout";
import HeroSection from "../cart/sections/HeroSection";
import ServiceSection from "./sections/ServiceSection";
import WhyUs from "./sections/WhyUs";
import Testimoni from "./sections/Testimoni";
import Location from "./sections/Location";
import FAQ from "./sections/FAQ";
export default function landingPage() {
  return (
    <Layout>
      <HeroSection />
      <ServiceSection />
      <WhyUs />
      <Testimoni />
      <Location />
      <FAQ />
    </Layout>
  );
}
