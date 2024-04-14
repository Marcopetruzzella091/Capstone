import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function SeguitiComponent(props) {
  console.log(props)

  return (
    <div className="section-box mt-3" id="about ">
     <h4>Seguiti</h4>
     <ListGroup className='d-flex'>
      {props.props.following
        .map(follower => <ListGroup.Item>{follower.following.name} <img className="profile-pic" src= {`/storage/${follower.following.image_url}`} alt="" /></ListGroup.Item>)}
      
      
    </ListGroup>
    </div>
  )
}
