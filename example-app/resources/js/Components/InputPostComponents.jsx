import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
 import { usePage } from '@inertiajs/react'
import { router } from '@inertiajs/react'
import { useSelector, useDispatch } from 'react-redux'


function CreatePostModal(props) {
  console.log(props)
  const [show, setShow] = useState(props.modal);
  const [show2, setShow2] = useState(false);
 
  const [post, setPost] = useState('');
  const [auth_id, setAuthId] = useState(props.name.auth.user.id);
  const [board_id, setBoardId] = useState(props.name.user.id);

  const selectedTrend = useSelector((state) => state.counter.value)
  const [trend, setTrend] = useState(props.modal);


  const { url } = usePage();
 

   const handleClose = () => {
    
    (url === '/homepage') ?
    props.setmodal(false) : setShow2(false)} 
   const handleShow = () => {
    (url === '/homepage') ?
    props.setmodal(true) : setShow2(true)}
   
    


  const handleSubmit2 =async  (e) => {
    e.preventDefault();
    {(url === '/homepage') ?
      props.setmodal(false)
    : setShow2(false)}
  
    await router.post('/post', { auth_id, post, board_id , trend}, { preserveScroll: true });
    setPost('');
  };

 
useEffect(() => {
  if (url === '/homepage') {
    setBoardId(props.name.auth.user.id);
    
  }
}, []);



useEffect(() => {
  setTrend(selectedTrend);
}, [selectedTrend]);

 useEffect(() => {
  setShow(props.modal);
}, [props.modal]); 

  return (
    <>
      <div className="section-box mt-4">
        <div className='row align-items-center'>
          <div className="col-2">
            <img src={`/storage/${props.name.auth.user.image_url}`} alt="Immagine Profilo" className="profile-pic" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          </div>
          <div className="col-7" onClick={handleShow}>
            <input type="text" placeholder="Crea post su un trend" className="form-control" />
          </div>
          
          <div className="col-3">
            <Button variant="primary" onClick={handleShow} className='w-100'>
              Nuovo post
            </Button>
         
          </div>
        </div>
      </div>

      <Modal show= {(url === '/homepage') ?props.modal : show2 } onHide={handleClose} centered>
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
                placeholder="Scrivi qualcosa qui..."
              />
              <p>#</p>
              <Form.Control
                className='my-1 '
                as="input"
                rows={3}
                value={ trend}
                onChange={(e) => setTrend(e.target.value)}
                placeholder="Scrivi qualcosa qui..."
              />
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
