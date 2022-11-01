import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import ProjectData from "./ProjectData";
import "./ProjectStyles.css";

const Project = () => {
  return (
    <div className="destination">
      <h1>Recent Projects</h1>
        <p>The most innovative projects ever</p>
        <ProjectData
            className="first-des"
            heading="Metropolis"
            text="The harmonious architectural ensemble of the Metropolis residential complex adds an ambitious character to the modern city. He is so unique in the whole world, unique and special. Your own green oasis – a 2-hectare park area. There are multi-meter alleys and comfortable benches for relaxing here for pleasant walks. To make your environment as comfortable and safe as possible, we have provided a closed area and 24-hour video surveillance in the house."
            img1={Mountain1}
            img2={Mountain2}
        />

        <ProjectData
            className="first-des-reverse"
            heading="Lucky Land"
            text="The residential complex Lucky Land is a new regional center of the Kyiv metropolis with a full-fledged internal infrastructure. The complex received an updated concept, developed by the DIM group of companies together with the architectural bureau Archimatika, and now features a unique combination of innovations with the traditions of Kyiv architecture. Seven quarters of the residential complex are located on an area of ​​28.5 hectares and form a multifunctional area in the live-work-play format that fully satisfies the daily needs of residents. And more than 100 hectares of forest nearby will be an excellent place for recreation, walking and sports. Lucky Land is a complex for people who are accustomed to the rhythm of the metropolis, but strive for tranquility, environmental friendliness and appreciate suburban comfort."
            img1={Mountain3}
            img2={Mountain4}
        />
    </div>
  );
};

export default Project;
