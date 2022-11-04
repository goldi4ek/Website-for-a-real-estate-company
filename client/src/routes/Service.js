import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import ObjectList from "../components/ObjectList";
import {observer} from "mobx-react-lite";

const Service = observer( () => {
  return (
    <>
    <Navbar/>
      <Hero
      cName = "hero-mid"
      heroImg = {AboutImg}
      title = "Service"
      btnClass = "hide"
      />
      <ObjectList/>
      <Footer/>
    </>
  );
});

export default Service;
