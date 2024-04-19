import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
 import { usePage } from '@inertiajs/react'
import { router } from '@inertiajs/react'
import { useSelector, useDispatch } from 'react-redux'

export default function InputpostComp2(props) { const [show, setShow] = useState(false);
    const [post, setPost] = useState('');
    const [auth_id, setAuthId] = useState(props.name.auth.user.id);
    const [board_id, setBoardId] = useState(props.name.user.id);
    const [trend, setTrend] = useState(props.trend);
   const selectedTrend = useSelector((state) => state.counter.value)
  
    const { url } = usePage();
    console.log(selectedTrend)
  
   const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
  

  
    const handleSubmit2 =async  (e) => {
      e.preventDefault();
      setShow(false);
    
      await router.post('/post', { auth_id, post, board_id }, { preserveScroll: true });
      setPost('');
    };
  
   
  useEffect(() => {
    if (url === '/homepage') {
      setBoardId(props.name.auth.user.id);
      
    }
  }, []);
  
    return (
      <>
        <div className="section-box mt-4">
          <div className='row align-items-center'>
            <div className="col-1">
              <img src={`/storage/${props.name.auth.user.image_url}`} alt="Immagine Profilo" className="profile-pic" style={{ width: '100%', borderRadius: '50%' }} />
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
                  placeholder="Scrivi qualcosa qui..."
                />
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={selectedTrend}
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
