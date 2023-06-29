import Layout from "../../components/layout";
import HeroSection from "./sections/HeroSection";
import ServiceSection from "./sections/ServiceSection";
export default function Hero(){
  return (
    <Layout>
      <HeroSection />
      <ServiceSection/>
    </Layout>
  )
}