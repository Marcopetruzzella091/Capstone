import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        surname: '',
        username: '',
        bio: '',
        years: '',
        img_url: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);
  console.log(data)
    const submit = (e) => {
        e.preventDefault();
        
        post('/register', data , {
            forceFormData: true,
          })
    };

    return (
        <Container   >
           <Row className='justify-content-center bg-white w-75 mx-auto my-5'>
            
            
            <div  className='my-5 ' >
            <div className='mt-5 w-75 mx-auto'><img src="/logo.png" alt=""  className='my-2 w-25 mx-auto'/></div>
          <p className='text-center w-50 mx-auto'>
           OnTrend è un social network che offre agli utenti un'esperienza coinvolgente per esprimere e confrontare opinioni sui trend attuali, dalla moda alla tecnologia e alla cultura pop.</p>
            
         </div>
        
            <Head title="Register" />

            <form onSubmit={submit} enctype="multipart/form-data"  className='w-50 mx-auto'>
                {/* Name */}
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                {/* Last Name */}
                <div className="mt-4">
                    <InputLabel htmlFor="surname" value="surname" />
                    <TextInput
                        id="surname"
                        name="surname"
                        value={data.surname}
                        className="mt-1 block w-full"
                        autoComplete="family-name"
                        onChange={(e) => setData('surname', e.target.value)}
                        required
                    />
                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                {/* Username */}
                <div className="mt-4">
                    <InputLabel htmlFor="username" value="Username" />
                    <TextInput
                        id="username"
                        name="username"
                        value={data.username}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('username', e.target.value)}
                        required
                    />
                    <InputError message={errors.username} className="mt-2" />
                </div>

                {/* Bio */}
                <div className="mt-4">
                    <InputLabel htmlFor="bio" value="Bio" />
                    <TextInput
                        id="bio"
                        name="bio"
                        value={data.bio}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('bio', e.target.value)}
                    />
                    <InputError message={errors.bio} className="mt-2" />
                </div>

                {/* Years */}
                <div className="mt-4">
                    <InputLabel htmlFor="years" value="Age" />
                    <TextInput
                        id="years"
                        name="years"
                        type="date"
                        value={data.years}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('years', e.target.value)}
                        required
                    />
                    <InputError message={errors.years} className="mt-2" />
                </div>

                {/* Image URL */}
                <div className="mt-4">
    <InputLabel htmlFor="img_url" value="Profile Picture" />
    <input
        id="img_url"
        name="img_url"
        type="file"
        accept=".jpg,.png"
        className="mt-1 block w-full"
        onChange={(e) => {
            if (e.target.files.length > 0) {
                // Assumi di utilizzare solo il primo file selezionato
                const file = e.target.files[0];
                setData('img_url', file);
            }
        }}
    />
    <InputError message={errors.img_url} className="mt-2" />
</div>

                {/* Email */}
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                {/* Confirm Password */}
                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        
        
        </Row >
        </Container>
    );
}
