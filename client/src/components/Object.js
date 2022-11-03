import "./ObjectStyles.css";
import ObjectData from "./ObjectData";
import Trip1 from "../assets/2.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Object() {
  return (
    <div className="trip">
      <h1>Our Projects</h1>
        <p>You can discover all our projects</p>
        <div className="tripcard">
            <ObjectData
            image={Trip1}
            heading="Metropolis"
            text="A harmonious combination of the comfort of the city and the tranquility of the natural area"
            />

            <ObjectData
            image={Trip2}
            heading="Lucky Land"
            text="Desired place for a happy life near nature"
            />

            <ObjectData
            image={Trip3}
            heading="Park Lake City"
            text="Even more comfort and privacy at your own pond"
            />
        </div>
    </div>

  );
}

export default Object;
