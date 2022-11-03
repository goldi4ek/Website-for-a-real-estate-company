import Project from "../components/Project";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Object from "../components/Object";
import MainImg from "../assets/home.jpg"

function Home() {
  return (
    <>
        <Navbar/>
      <Hero
      cName="hero"
      heroImg ={MainImg}
      title = "Your Life Starts Here"
      text = "The Best Developer"
      buttonText="Share Your Contact"
      url="/contact"
      btnClass="show"
      />
        <Project/>
        <Object/>
        <Footer/>
    </>
  );
}

export default Home;
