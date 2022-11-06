import {Button, Modal} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const ViewContact = observer(({show, onHide}) => {
    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default ViewContact