import Layout from "../../components/layout";
import HeroSection from "../cart/sections/HeroSection";
import ServiceSection from "./sections/ServiceSection";
export default function Cart(){
  return (
    <Layout>
      <HeroSection />
      <ServiceSection/>
    </Layout>
  )
}