import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';

import BioComponent from '@/Components/BioComponent';
import HomePostComponent from '@/Components/HomePostComponent';
import Navbarcomponents from '@/Components/Navbarcomponents';
import SinglepostComponent from '@/Components/SinglepostComponent';
import InputPostComponents from '@/Components/InputPostComponents';
import TrendsComponent from '@/Components/TrendsComponent';


export default function Register(props) {
 
   

 
   console.log(props)

   
    



    return (<>
    <Head title="Homepage" />
        <Navbarcomponents auth={props.auth} />
        <TrendsComponent props={props}/>
        <div className='row mx-5'>
        <div className="col-8 ">  <h1>head</h1></div>
       
        <div className="col-8 "> <h1>post</h1> </div>
        <div className="col-8 "> {/* <InputPostComponents name ={props}/>  */}</div>
        <div className="col-8 "> {/* <SinglepostComponent post={posties} name={names}/> */} </div>
    </div>
 
    
   
    
    </>
       
    );
}
