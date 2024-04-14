import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { router } from '@inertiajs/react'

export default function PostComment( props ) {

    const [show, setShow] = useState(false);
    const [postContent, setPostContent] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePostContentChange = (event) => setPostContent(event.target.value);
    const handleSubmit = () => {
      // Qui puoi gestire l'invio del contenuto del post, ad esempio inviando a un API o aggiornando lo stato
      
      handleClose(); // Chiudi la modal dopo l'invio
    };
   
  
    const [post, setPost] = useState('');
    let userid = props.userlog.auth;
    let postid = props.post.id;
    let board_user_id = props.post.board_user_id

   
  
    const handleSubmit2 = (e) => {
        e.preventDefault();
        setShow(false)
        router.post('/comment', { userid, postid,  postContent, board_user_id }, { preserveScroll: true })
        setPostContent('')
        ;
    };
 



  return (
     <>
    
  
  <span className="col-8" onClick={handleShow}>
     Commenta
  </span>
 



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
              value={postContent} 
              onChange={(e) => setPostContent(e.target.value)}
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
  
