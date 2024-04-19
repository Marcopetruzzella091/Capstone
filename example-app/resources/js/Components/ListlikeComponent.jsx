import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from '@inertiajs/react';

export default function LikeModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <b onClick={handleShow} className="pointer mx-1">{props.post.like.length}</b>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <ListGroup variant="flush">
            {props.post.like.map((like, index) => (
              <ListGroup.Item key={index} className='d-flex justify-content-between align-items-center'>
                <Link href={`/alluser/${like.user.id}`} className='d-flex justify-content-between align-items-center'>
                  <img src={`/storage/${like.user.image_url}`} alt="Immagine Profilo" className="profile-pic" />
                  {like.user.name}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
