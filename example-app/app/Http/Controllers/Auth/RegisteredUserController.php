<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)//: RedirectResponse
    {     
       
       
        
         $imgPath = "\profiles\userplaceholde.png"; // Default path per l'immagine se non viene caricata
         if ($request->hasFile('img_url')) {
            $file = $request->file('img_url');
            $filename = uniqid() . '.' . $file->getClientOriginalExtension();
            $imgPath = $file->storeAs('profiles', $filename, 'public');
        }

          // dd($imgPath);
         $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'nullable|string|max:255',
            'username' => 'required|string|max:255',
            'years' => 'nullable|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'image_url' => 'nullable|string|max:255',
            
            'bio' => 'nullable|string|max:255',
            
            
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'image_url' =>  $imgPath,
            'surname' => $request->surname,
            'username' => $request->username,
            'years' => $request->years,
            'bio' => $request->bio,
            
        ]);
      

        event(new Registered($user));

         Auth::login($user);
        

         return to_route('alluser.show', ['id' => $user->id]);
    }
}
