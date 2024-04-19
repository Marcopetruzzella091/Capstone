import React from 'react';
import { router } from '@inertiajs/react';
import { Link } from '@inertiajs/react'

export default function BioComponent(props) {
  let Follow = props.info.follower.find(oggetto => oggetto.user.id === props.info.auth.user.id);
  const handleSubmit = (e) => {
    e.preventDefault();
    router.post('/follower', { auth: props.info.auth.user.id, user: props.info.user.id }, { preserveScroll: true });
  };

  let info = props.info.user;

  return (
    
      <div className="section-box" id="about">
        <div className="row g-4 g-xl-5">
          <div className="col-12 col-xl-4">
            <div className="hero-avatar" >
              <img src={"/storage/" + info.image_url} alt="" data-rjs="2"  className='rounded-circle' style={{ width: '200px', height: '200px' }}/>
              <div className="hero-avatar-text">
                <span className="typer" id="typer1" data-words="Hi There!, I'm Christina" data-delay="50" data-deletedelay="1500" style={{ color: 'black' }}> I'm {info.name}</span>
                <span className="cursor" data-owner="typer1" style={{ transition: 'all 0.1s ease 0s', opacity: 1 }}>_</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <h6 className="title-heading mb-4" data-backdrop-text="Biografia">Bio</h6>
            <h1>{info.name} {info.surname}</h1>
            <p className="mt-3">@{info.username}</p>
            {props.info.auth.user.id !== props.info.user.id ?
              <button onClick={handleSubmit} className="btn btn-primary mt-3">
                {Follow ? "Unfollow" : "Follow"}
              </button>
              :
               <Link className="btn btn-primary mt-3 text-white"  href="/editprofile">Modifica Profilo</Link> 
            }
            <ul className="list-inline-pills mt-3">
              <li><i className="fa-brands fa-html5 pe-2"></i> #TREND 1</li>
              <li><i className="fa-brands fa-bootstrap pe-2"></i> #TREND 2</li>
              <li><i className="fa-solid fa-magnifying-glass pe-2"></i>#TREND 3</li>
            </ul>
            <p className="mt-1">{info.bio}</p>
          </div>
        </div>
        <div className="row g-4 mt-1">
          <div className="col-12 col-xl-4">
            <div className="d-flex align-items-center">
              <div className="d-inline-block">
                <h1 className="font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{props.info.allpost.length}</span></h1>
              </div>
              <div className="d-inline-block ps-2">
                <h4 className="line-height-100 fw-normal mb-0"></h4>
                <p className="mono-heading">Post Pubblicati</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="d-flex align-items-center">
              <div className="d-inline-block">
                <h1 className="font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{props.info.follower.length}</span></h1>
              </div>
              <div className="d-inline-block ps-2">
                <h4 className="line-height-100 fw-normal mb-0"></h4>
                <p className="mono-heading">Follower</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="d-flex align-items-center">
              <div className="d-inline-block">
                <h1 className="font-family-mono fw-semi-bold stroke-text display-4"><span className="counter">{props.info.following.length}</span></h1>
              </div>
              <div className="d-inline-block ps-2">
                <h4 className="line-height-100 fw-normal mb-0"></h4>
                <p className="mono-heading">Seguiti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
