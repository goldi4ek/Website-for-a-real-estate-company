import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {createPurpose} from "../../http/purposeAPI";


const CreateOffer = observer(({show, onHide}) => {
    require("bootstrap/dist/css/bootstrap.min.css")
    const [name, setName] = useState('')
    const [room, setRoom] = useState()
    const [price, setPrice] = useState()
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addPurpose = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('room', room)
        formData.append('price', price)
        formData.append('img', file)
        console.log(file)
        console.log(room)
        createPurpose(formData).then(data => onHide())
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
            <Form.Control
                className="mt-3 mb-3"
                type="file"
                onChange={selectFile}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addPurpose}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default CreateOffer