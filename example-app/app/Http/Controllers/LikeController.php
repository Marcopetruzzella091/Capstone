<?php

namespace App\Http\Controllers;

use App\Models\like;
use Illuminate\Http\Request;
use  Illuminate\Support\Facades\Auth;
use App\Models\notifications;
use Pusher\Pusher;
use App\Models\Post;




use App\events\NotificationCreated;


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
         } else {if ($request->userid != $request->userliked){
            
            $notifications = notifications::create([
                'user_id_sender' => $request->userid,
                'user_id_receiver' => $request->userliked,
                'post_id' => $request->postid,
                'notification_content' => 'piace il tuo post',
            ]);}

            $pusher = new Pusher(
                env('PUSHER_APP_KEY'),
                env('PUSHER_APP_SECRET'),
                env('PUSHER_APP_ID'),
                [
                    'cluster' => env('PUSHER_APP_CLUSTER'),
                    'useTLS' => true
                ]
            );
            
                $pusher->trigger('notifications', 'new-notification', [
                    notifications::with('post', 'user_sender', 'user_receiver')->find($notifications->id)
                   // 'recipient_id'=> $notifications->user_id_receiver
                ]);
            
           



             // Se non esiste un like, crea un nuovo like con lo stato true
             $like = Like::create([
                 'post_id' => $request->postid,
                 'user_id' => $request->userid,
                 'state' => true

                 
             ]);
            
            
             return response()->json(['success' => true]);
            
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
