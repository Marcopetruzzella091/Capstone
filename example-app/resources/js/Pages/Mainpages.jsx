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

export default function Register(props) {
 
   

   let names = props[0][0];
   let posties = props[0][0].post //array
 
   console.log(props)

   
    



    return (<>
        <Navbarcomponents />
        <div className='row mx-5'>
        <div className="col-8 ">   <BioComponent info={props}/></div>
       
        <div className="col-8 "> <HomePostComponent /> </div>
        <div className="col-8 "> <InputPostComponents name ={props}/> </div>
        <div className="col-8 "> <SinglepostComponent post={posties} name={names}/> </div>
    </div>
 
    
   
    
    </>
       
    );
}
