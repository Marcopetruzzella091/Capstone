import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function Followeboxcomponent(props) {
  return (
    <div className="section-box" id="about">
      <h4>Follower</h4>
      <ListGroup className='d-flex'> 
        {props.props.follower.map(follower => (
          <ListGroup.Item key={follower.user.id}>
            <Link href={`/alluser/${follower.user.id}`}>
              {follower.user.name} {follower.user.surname} 
              <img className="profile-pic" src={`/storage/${follower.user.image_url}`} alt="" />
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
