import React from 'react'
import Card from 'react-bootstrap/Card';

export default function AdvertistingComponent() {
  return (<>
    <p className='text-center'>Sponsorizzato</p>
    <Card className="adv1 " >
    <Card.Img variant="top" src="/build.png" />
    <Card.Body>
      
      <Card.Text className='cardtext'>
       Entra anche tu in build different.it
      </Card.Text>
      
    </Card.Body>
  </Card>
  <Card className="adv1 mt-3" >
    <Card.Img variant="top" src="/swithcoo2.png" />
    <Card.Body>
      
      <Card.Text className='cardtext'>
       Risparmia subito sulle tue bollette grazie a Swithcoo
      </Card.Text>
      
    </Card.Body>
  </Card>
  <Card className="adv1 mt-3" >
    <Card.Img variant="top" src="/rayban.jpg" />
    <Card.Body>
      
      <Card.Text className='cardtext'>
       Scopri subito la nuova collezzione
      </Card.Text>
      
    </Card.Body>
  </Card>
  
 </>
  )
}
