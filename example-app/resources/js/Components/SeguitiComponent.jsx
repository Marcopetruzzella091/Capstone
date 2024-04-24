import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from '@inertiajs/react';

export default function SeguitiComponent(props) {
  return (
    <div className="section-box2 mt-3" id="about">
      <h3 className="title-heading"> Seguiti</h3>
      
      <div className="mt-3">
        {props.props.following.map((follower, index) => (
          <div className='border-0 d-flex align-items-center my-3' key={index}>
            <Link className='d-flex align-items-center' href={`/alluser/${follower.following.id}`}>
            <img className="profile-pic" src={`/storage/${follower.following.image_url}`} alt="" />
            {follower.following.name} 
            
            
       
            </Link>
            
          </div>
        ))}
      </div>

     


    </div>
  );
}
