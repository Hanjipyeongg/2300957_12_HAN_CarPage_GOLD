import Footer from "../footer/Footer";
import NavbarComponent from "../navbar";

export default function Layout({children}){
  return (
    <>
      <NavbarComponent />
      {children}
      <Footer />
    </>
  )
}