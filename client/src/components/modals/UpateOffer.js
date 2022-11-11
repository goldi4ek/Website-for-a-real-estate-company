import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {updateOnePurpose} from "../../http/purposeAPI";


const UpdateOffer = observer(({show, onHide, name_, room_, price_, file_, id}) => {
    require("bootstrap/dist/css/bootstrap.min.css")
    const [name, setName] = useState('')
    const [room, setRoom] = useState()
    const [price, setPrice] = useState()
    console.log(file_)
    const updatePurpose = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('room', room)
        formData.append('price', price)
        formData.append('img', file_)
        console.log(formData)
        updateOnePurpose(id, formData).then(data => onHide())
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create new offer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
                value={name}
                onChange={e => setName(e.target.value)}
                className="mt-3 mb-3"
                placeholder={"Enter name of offer"}
            />
            <Form.Control
                value={room}
                onChange={e => setRoom(e.target.value)}
                className="mt-3 mb-3"
                placeholder={"Enter number of rooms"}
            />
            <Form.Control
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                className="mt-3 mb-3"
                placeholder={"Enter price of offer"}
                type="number"
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={updatePurpose}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default UpdateOffer