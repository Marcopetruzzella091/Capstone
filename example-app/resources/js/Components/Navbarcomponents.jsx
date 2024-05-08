import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from '@inertiajs/react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ListGroup from 'react-bootstrap/ListGroup'; // Importa il componente ListGroup
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function Navbarcomponents(props) {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState("");
  const [reattimenotifications, setReattimenotifications] = useState("");

  
  const pusher = new Pusher('6540bbaeec368b20ce22', {
    cluster: 'eu',
    encrypted: true,
  });
  
  const channel = pusher.subscribe('notifications');
  channel.bind('new-notification', function(data) {
    const { notification } = data;
    // Controlla se l'ID dell'utente destinatario corrisponde all'ID dell'utente attualmente autenticato
    {
      setReattimenotifications(data);
      setShowC(true);
  
      // Nascondi la notifica dopo 5 secondi
      setTimeout(function() {
        setShowC(false);
      }, 5000);
    }
  });
console.log(reattimenotifications)

  useEffect(() => {
    // Funzione per effettuare la chiamata AJAX
    const fetchData = async () => {
      try {
        // Verifica se la lunghezza della query è almeno 3
        if (query.length >= 3) {
          // Effettua la chiamata AJAX
          const response = await fetch('http://127.0.0.1:8000/search/' + query);
  
          // Verifica se la risposta è ok (status 200)
          if (!response.ok) {
            throw new Error('Errore durante la richiesta');
          }
  
          // Estrai i dati JSON dalla risposta
          const data = await response.json();
  
          // Imposta i dati nel nostro stato
          setSearchResult(data);
          setShowB(true);
        } else {
          // Pulisci i risultati se la query non è sufficientemente lunga
          setSearchResult(null);
        }
      } catch (error) {
        // Gestisci gli errori qui
        setError(error.message);
      }
    };
  
    // Chiamata alla funzione fetchData
    fetchData();
  
    // Pulizia dell'effetto per evitare memory leak
    return () => {
      // Eventuale pulizia
    };
  }, [query]);




  useEffect(() => {
    // Funzione per effettuare la chiamata AJAX
    const fetchData = async () => {
      try {
        // Verifica se la lunghezza della query è almeno 3
        if (showA) {
          // Effettua la chiamata AJAX
          const response = await fetch('/notification' );
  
          // Verifica se la risposta è ok (status 200)
          if (!response.ok) {
            throw new Error('Errore durante la richiesta');
          }
  
          // Estrai i dati JSON dalla risposta
          const data = await response.json();
          console.log(data)
  
          // Imposta i dati nel nostro stato
          setNotifications(data);
          
        } else {
          // Pulisci i risultati se la query non è sufficientemente lunga
          setSearchResult(null);
        }
      } catch (error) {
        // Gestisci gli errori qui
        setError(error.message);
        console.log(error)
      }
    };
  
    // Chiamata alla funzione fetchData
    fetchData();
  
    // Pulizia dell'effetto per evitare memory leak
    return () => {
      // Eventuale pulizia
    };
  }, [showA]);


  
  

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);
 

    
  return (
    <>
     {(showC ) &&  <div className="notification animate__animated animate__fadeIn " id="notification">
  <img src={"/profiles/"+ reattimenotifications[0].user_sender.image_url} alt="User Image" class="user-image"/>
  <div class="notification-text">
    <p>a <strong>{reattimenotifications[0].user_sender.name} {reattimenotifications[0].user_sender.surname}</strong> {reattimenotifications[0].notification_content}</p>
  </div>
</div> }

        

      <Navbar className='mb-5' style={{ backgroundColor: 'white', position: 'relative' }}>
        <Container>
          <Navbar.Brand href="#home"><img className="top-logo" src="/logo3.png" alt="bye" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Link href="/homepage" className="nav-link">Home</Link>
              <Link className="nav-link" href={`/alluser/${props.auth.auth.user.id}`}>Il mio Profilo</Link>
            </Nav>
            <Form inline className='mx-3'>
        <Row >
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => setQuery(e.target.value)}
            />
          </Col>
          
        </Row>
        

        <Toast show={showB} onClose={toggleShowB} style={{ position: 'relative',  zIndex: '9999'}}className='w-100 bg-white' >
          <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999 }} className='w-100'>
  <Toast.Header className='bg-white'>
    
    <strong className="me-auto">Anteprima ricerca</strong>
   
  </Toast.Header>
  <Toast.Body className='bg-white p-0'>
    <ListGroup>
     {searchResult !== null &&  searchResult.users.map((user) => (
        <Link href={`/alluser/${user.id}`} key={user.id}>
        <ListGroup.Item key={user.id} >
          <div className="d-flex align-items-center m-0">
            <img src={`/profiles/${user.image_url}`} className="rounded me-2" alt="" style={{ width: '40px', height: '40px' }} />
            <div>
              <strong>{user.name} {user.surname}</strong>
              <p>{user.active_status === 1 ? 'Online' : 'Offline'}</p>
              
            </div>
          </div>
        </ListGroup.Item>
     </Link> ))}
     
    </ListGroup>
  </Toast.Body>
  </div>
</Toast>

        
        
      </Form>
           

            <NavDropdown title={props.auth.auth.user.name} id="navbarScrollingDropdown">
              <Link className="nav-link" href={`/profile/`}>Il mio Profilo</Link>
              <Link className="nav-link" href={route('logout')} method="post">Logout</Link>
              <NavDropdown.Divider />
            </NavDropdown >

            <Row className='justify-content-end align-items-center'>
              <Col >
                
                <i className="bi bi-bell-fill" onClick={toggleShowA}></i>
                




                
                <Toast show={showA} onClose={toggleShowA} style={{ position: 'absolute', top: '50px', right: '10px', zIndex: '9999'}}>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto">Notifiche</strong>
   
  </Toast.Header>
  <Toast.Body>
    <ListGroup>
      {notifications  &&  notifications.map((notification) => (
        <Link href={`/alluser/${notification.user_id_receiver}/${notification.post_id}`} key={notification.id}>
        <ListGroup.Item key={notification.id} >
          <div className="d-flex align-items-center">
            <img src={`/profiles/${notification.user_sender.image_url}`} className="rounded me-2" alt="" style={{ width: '40px', height: '40px' }} />
            <div>
              <strong>{notification.user_sender.name}</strong>
              <p>{notification.notification_content}</p>
              <small>{notification.created_at.substring(0, 10)}</small>
            </div>
          </div>
        </ListGroup.Item>
     </Link> ))}
    </ListGroup>
  </Toast.Body>
</Toast>

              </Col> 
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}


