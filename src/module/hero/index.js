import Layout from "../../components/layout";
import HeroSection from "./sections/HeroSection";
import ServiceSection from "./sections/ServiceSection";
import WhySection from "./sections/WhySection";
export default function Hero(){
  return (
    <Layout>
      <HeroSection />
      <ServiceSection/>
      <whySection/>
    </Layout>
  )
}