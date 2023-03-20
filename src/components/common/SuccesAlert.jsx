import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export default function SuccesAlert(props) {
  const navigate=useNavigate();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
         { props.alertMessage}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>navigate("/")}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



      
