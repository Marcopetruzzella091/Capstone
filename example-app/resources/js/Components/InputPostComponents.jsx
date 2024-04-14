import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { router } from '@inertiajs/react'


function CreatePostModal(props) {


  const [show, setShow] = useState(false);
  const [postContent, setPostContent] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePostContentChange = (event) => setPostContent(event.target.value);
  const handleSubmit = () => {
    // Qui puoi gestire l'invio del contenuto del post, ad esempio inviando a un API o aggiornando lo stato
   
    handleClose(); // Chiudi la modal dopo l'invio
  };

 let auth_id =  props.name.auth.user.id
 let board_id = props.name.user.id



  const [post, setPost] = useState('');
  let userid = props.name
  //console.log(userid);
  const handleSubmit2 = (e) => {
      e.preventDefault();
      setShow(false)
      router.post('/post', { auth_id, post ,board_id }, { preserveScroll: true })
      setPost('')
      ;
  };




  return (
    <><div className="section-box mt-4 " >
      <div className='row align-items-center'>
    <div className="col-1">
        <img src=
        {"/storage/" + props.name.auth.user.image_url} alt="Immagine Profilo" className="profile-pic" style={{ width: '100%', borderRadius: '50%' }}/>
    </div>
    <div className="col-8" onClick={handleShow}>
        <input type="text" placeholder="Crea post su un trend" className="form-control" />
    </div>
    <div className="col-3">
        <Button variant="primary" onClick={handleShow} className='w-100'>
            Crea nuovo post
        </Button>
    </div>
</div>
</div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crea un Nuovo Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>A cosa stai pensando?</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={post} 
                onChange={(e) => setPost(e.target.value)}
                placeholder="Scrivi qualcosa qui..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleSubmit2}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreatePostModal;
