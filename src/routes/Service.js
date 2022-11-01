import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Object from "../components/Object";

function Service() {
  return (
    <>
    <Navbar/>
      <Hero
      cName = "hero-mid"
      heroImg = {AboutImg}
      title = "Service"
      btnClass = "hide"
      />
      <Object/>
      <Footer/>
    </>
  );
}

export default Service;
