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


import { useSelector, useDispatch } from 'react-redux'
import { trendsSelected } from '../Redux/Testslice'


export default function Register(props) {
 
   

 
  
   const count = useSelector((state) => state.counter)
   const dispatch = useDispatch()
   console.log(props)
   
   
    



    return (<>
    <Head title="Homepage" />
        <Navbarcomponents auth={props} />
        <TrendsComponent props={props}/>
        
 
    
   
    
    </>
       
    );
}
