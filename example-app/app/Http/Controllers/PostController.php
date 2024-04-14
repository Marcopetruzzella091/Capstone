<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
      
   
       //return ( dd($request));

    $user = Post::create([

        'user_id' => $request->auth_id,
        'post_content' => $request->post,
        'board_user_id' => $request->board_id

       
    ]);

    
    return to_route('alluser.show', ['id' => $request->board_id])->with('success', 'Post eliminato con successo!');
    

    





    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post, Request $request)
    {
        



    // Trova il post utilizzando l'ID fornito e cancellalo
    $post = Post::findOrFail($request->postid);
    $post->delete();

    // Fornisci una risposta JSON per indicare il successo
    
    }
}
