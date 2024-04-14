<?php

namespace App\Http\Controllers;

use App\Models\like;
use Illuminate\Http\Request;

class LikeController extends Controller
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
    
    
     public function store(Request $request)
     {
         // Controlla se esiste già un like con lo stesso post_id e user_id
         $existingLike = Like::where('post_id', $request->postid)
                             ->where('user_id', $request->userid)
                             ->first();
     
         // Se esiste già un like, elimina completamente il like
         if ($existingLike) {
             $existingLike->delete();
         } else {
             // Se non esiste un like, crea un nuovo like con lo stato true
             $like = Like::create([
                 'post_id' => $request->postid,
                 'user_id' => $request->userid,
                 'state' => true
             ]);
         }
     }
     


    /**
     * Display the specified resource.
     */
    public function show(like $like)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(like $like)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, like $like)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(like $like)
    {
        //
    }
}
