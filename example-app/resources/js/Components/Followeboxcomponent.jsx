import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function Followeboxcomponent(props) {
  return (
    <div className="section-box2" id="about">
      <h3 className="title-heading">Follower</h3>
      <div className="mt-3">
        {props.props.follower.map(follower => (
          <div className='border-0 d-flex align-items-center my-3'  key={follower.user.id}>
            <Link className='d-flex align-items-center' href={`/alluser/${follower.user.id}`}>
            <img className="profile-pic" src={`/storage/${follower.user.image_url}`} alt="" />
              {follower.user.name} {follower.user.surname} 
             
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
