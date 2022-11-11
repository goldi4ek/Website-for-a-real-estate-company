import "./ObjectStyles.css";
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchPurposes} from "../http/purposeAPI";
import PurposeData from "./PurposeData";

const PurposeList = observer(() => {

    const {purpose} = useContext(Context)
    let [count, setCount] = useState(0)
    useEffect(() => {
        fetchPurposes().then(data => {
            purpose.setPurposes(data.rows)
            setCount(data.count)
        })
    }, [purpose])
    return (
    <div className="contact">
      <h1>Offers</h1>
        <p>Count: {count}</p>
        <div className="object">
            {purpose.purposes.map(purpose =>
                <PurposeData
                    key={purpose.id}
                    image={process.env.REACT_APP_API_URL + purpose.img}
                    heading={purpose.name}
                    email={" Rooms: " + purpose.room}
                    text={purpose.price + "$"}
                    id={purpose.id}
                    room = {purpose.room}
                    price = {purpose.price}
                    file = {purpose.img}
                />
            )}
        </div>
    </div>

  );
})

export default PurposeList;