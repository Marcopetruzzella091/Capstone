import BioComponent from '@/Components/BioComponent';
import HomePostComponent from '@/Components/HomePostComponent';
import Navbarcomponents from '@/Components/Navbarcomponents';
import SinglepostComponent from '@/Components/SinglepostComponent';
import InputPostComponents from '@/Components/InputPostComponents';
import Followeboxcomponent from '@/Components/Followeboxcomponent';
import SeguitiComponent from '@/Components/SeguitiComponent';
import AdvertistingComponent from '@/Components/AdvertistingComponent';
import { Head } from '@inertiajs/react'


export default function Register(props) {
    let auth = props.auth.user.id;

 

    return (
        <>  <Head title="Your Profile" />
            <Navbarcomponents auth={props} />
            
            <div className='row mx-5 scrolling-column'>
                <div className="col-2 ">
                    <div><AdvertistingComponent /></div>
                </div>
                <div className="col-7">
                    <div><BioComponent info={props} /></div>
                    <div><HomePostComponent /></div>
                    <div><InputPostComponents name={props} /></div>
                    <div><SinglepostComponent post={props.posts} auth={auth}  action={props.action}  allprops={props}/></div>
                </div>
                <div className="col-3 fixed-column w-25">
                    <Followeboxcomponent props={props} />
                    <SeguitiComponent props={props} />
                </div>
            </div>
        </>
    );
}
