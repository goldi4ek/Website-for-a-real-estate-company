import "./ObjectStyles.css";
import ObjectData from "./ObjectData";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import {fetchPurposes} from "../http/purposeAPI";
import {observer} from "mobx-react-lite";

const ObjectList = observer(() => {

    const {purpose} = useContext(Context)

    useEffect(() => {
        fetchPurposes().then(data => {
            purpose.setPurposes(data.rows)
        })
    }, [purpose])

    return (
    <div className="trip">
      <h1>Our Offers</h1>
        <p>You can discover all our offers</p>
        <div className="object">
            {purpose.purposes.map(purpose =>
                <ObjectData
                    key={purpose.id}
                    image={process.env.REACT_APP_API_URL + purpose.img}
                    heading={purpose.name}
                    email={" Rooms: " + purpose.room}
                    text={purpose.price + "$"}
                />
            )}
        </div>
    </div>

  );
})

export default ObjectList;