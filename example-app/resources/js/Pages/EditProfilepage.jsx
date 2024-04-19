import React from 'react'
import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react'

export default function EditProfilepage(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: props.auth.user.name,
        surname: props.auth.user.surname,
        username: props.auth.user.username,
        bio: props.auth.user.bio,
        years:  props.auth.user.years,
        img_url: props.auth.user.img_url,
        email: props.auth.user.email,
       
    });
  console.log(props)
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);
  console.log(data)
    const submit = (e) => {
        e.preventDefault();
        
        router.patch('/editprofile', data , {
           
          })
    };




  return (
    <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} enctype="multipart/form-data">
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

                {/* Image URL */}{/* 
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
</div> */}

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

               

                {/* Submit Button */}
                <div className="flex items-center justify-end mt-4">
                   

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Modifica
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
  )
}
