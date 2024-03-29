import "./ObjectStyles.css";

function ObjectData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
          <img src={props.image} alt="image"/>
      </div>
        <h4>{props.heading}</h4>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.text}</p>
    </div>
  );
}

export default ObjectData;
