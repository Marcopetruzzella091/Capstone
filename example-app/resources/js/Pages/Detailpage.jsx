import BioComponent from '@/Components/BioComponent';
import HomePostComponent from '@/Components/HomePostComponent';
import Navbarcomponents from '@/Components/Navbarcomponents';
import SinglepostComponent from '@/Components/SinglepostComponent';
import InputPostComponents from '@/Components/InputPostComponents';
import Followeboxcomponent from '@/Components/Followeboxcomponent';
import SeguitiComponent from '@/Components/SeguitiComponent';
import { Head } from '@inertiajs/react'


export default function Register(props) {
    let auth = props.auth.user.id;
    console.log(props)
 

    return (
        <>  <Head title="Your Profile" />
            <Navbarcomponents auth={props.auth} />
            <div className='row mx-5 scrolling-column'>
                <div className="col-8">
                    <div><BioComponent info={props} /></div>
                    <div><HomePostComponent /></div>
                    <div><InputPostComponents name={props} /></div>
                    <div><SinglepostComponent post={props.posts} auth={auth}  action={props.action} /></div>
                </div>
                <div className="col-4 fixed-column">
                    <Followeboxcomponent props={props} />
                    <SeguitiComponent props={props} />
                </div>
            </div>
        </>
    );
}
