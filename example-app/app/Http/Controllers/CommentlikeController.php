<?php

namespace App\Http\Controllers;

use App\Models\commentlike;
use App\Http\Requests\StorecommentlikeRequest;
use App\Http\Requests\UpdatecommentlikeRequest;

class CommentlikeController extends Controller
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
    public function store(StorecommentlikeRequest $request)
    { //return $request;
        // Controlla se esiste già un like con lo stesso post_id e user_id
        $existingLike = commentlike::where('comment_id', $request->commentid)
        ->where('user_id', $request->userid)
        ->first();

// Se esiste già un like, elimina completamente il like
if ($existingLike) {
$existingLike->delete();
} else {
// Se non esiste un like, crea un nuovo like con lo stato true
$like = commentlike::create([
'comment_id' => $request->commentid,
'user_id' => $request->userid,
'state' => true
]);
}
    }

    /**
     * Display the specified resource.
     */
    public function show(commentlike $commentlike)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(commentlike $commentlike)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatecommentlikeRequest $request, commentlike $commentlike)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(commentlike $commentlike)
    {
        //
    }
}
