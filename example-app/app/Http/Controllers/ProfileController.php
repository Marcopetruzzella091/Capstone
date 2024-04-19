<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    public function edit2(Request $request): Response
    {
        return Inertia::render('EditProfilepage', [
            
        ]);
    }

    public function edit2done(ProfileUpdateRequest $request ) 
    {

        $imgPath = "\profiles\userplaceholde.png"; // Default path per l'immagine se non viene caricata
         if ($request->hasFile('img_url')) {
            $file = $request->file('img_url');
            $filename = uniqid() . '.' . $file->getClientOriginalExtension();
            $imgPath = $file->storeAs('profiles', $filename, 'public');
        }


        $user = Auth::user();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->surname = $request->surname;
        $user->username = $request->username;
        $user->bio = $request->bio;
        $user->years = $request->years;
        //$user->image_url = $imgPath;
      //  dd($user);

        $user->save();

        return to_route('alluser.show', ['id' => $user->id]);
        



       
    }



}
