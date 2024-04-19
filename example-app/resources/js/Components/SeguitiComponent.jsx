import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function SeguitiComponent(props) {
  return (
    <div className="section-box mt-3" id="about">
      <h4>Seguiti</h4>
      <ListGroup className='d-flex'>
        {props.props.following.map((follower, index) => (
          <ListGroup.Item key={index}>
            {follower.following.name} 
            
            <Link href={`/alluser/${follower.following.id}`}>
            <img className="profile-pic" src={`/storage/${follower.following.image_url}`} alt="" />
            </Link>
            
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
