<?php

namespace App\Http\Controllers;

use App\Models\alluser;
use App\Http\Requests\StorealluserRequest;
use App\Http\Requests\UpdatealluserRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

use App\Models\user;
use App\Models\post;
use App\Models\comment;
use App\Models\like;
use App\Models\commentlike;
use App\Models\follower;
use App\Models\notifications;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;




class AlluserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index( )
    {  
        
        $fileContents = file_get_contents(__DIR__ . '/serpapi.json');
        $fileContents = json_decode($fileContents, true);
        $user = user::all()->first();  
        $userspost = Post::with('user' , 'comment.user' , 'like.user', 'comment.commentlikes.user')->get();
       // ->with('user' , 'comment.user' , 'like.user', 'comment.commentlikes.user' )->get(); 
        $userallpost = Post::all();
       
        $userlike = like::where('user_id', '=', Auth::user()->id)->get();
        $notification = notifications::where('user_id_receiver', '=', Auth::user()->id)->with('post', 'user_sender', 'user_receiver') ->get();
        
        return Inertia::render('Mainpages', [
            'trends' => $fileContents,
            
            'user' => $user,
            'posts' => $userspost
        ,   'allpost' => $userallpost
        ,   'like' => $userlike,
             'action' => false
        ,   'notification' => $notification
       
            
        ]);
         $client = new Client();
        try {
           // $response = $client->request('GET', 'https://serpapi.com/search.json?engine=google_trends_trending_now&frequency=daily&api_key=4eb0c3a207a2f2bcfaa2ce34cbe8cae8ebf56e3802bee5cb9674842c989b2549&geo=IT');
             
                       


            if ($response->getStatusCode() == 200) {
                $data = json_decode($response->getBody()->getContents());
                // Esegui operazioni sui dati, come inviarli alla vista o elaborarli ulteriormente
                
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Errore nella richiesta API: ' . $e->getMessage()], 500);
        } 
       
      
      
    }




    public function indexshow( $request)
    {  
        
        
        $fileContents = file_get_contents(__DIR__ . '/serpapi.json');
        $fileContents = json_decode($fileContents, true);
        $user = user::all()->first();  
        $userspost = Post ::where('trend', $request)->with('user' , 'comment.user' , 'like.user', 'comment.commentlikes.user')->get();
       // ->with('user' , 'comment.user' , 'like.user', 'comment.commentlikes.user' )->get(); 
        $userallpost = Post::all();
        $notification = notifications::where('user_id_receiver', '=', Auth::user()->id)->with('post', 'user_sender', 'user_receiver') ->get();
       
        $userlike = like::where('user_id', '=', Auth::user()->id)->get();
        
        return Inertia::render('Mainpages', [
            'trends' => $fileContents,
            
            'user' => $user,
            'posts' => $userspost
        ,   'allpost' => $userallpost
        ,   'like' => $userlike,
             'action' => false
             ,   'notification' => $notification
       
            
        ]);
         
       
      
      
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
    public function store(StorealluserRequest $request )
    {   
        $user = Alluser::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
      
       return $request->all();
    
    }




    /**
     * Display the specified resource.
     */
    public function show(alluser $alluser, $request, request $request2)
    {   
        $user = user::all()->where('id', '=', $request)->first();  
        $userspost = Post::where('board_user_id', $request)  // post sulla bacheca
        ->with('user' , 'comment.user' , 'like.user', 'comment.commentlikes.user' )->get(); 
        $userallpost = Post::where('user_id', $request)->get();    
        $notification = notifications::where('user_id_receiver', '=', Auth::user()->id)->with('post', 'user_sender', 'user_receiver') ->get();
        $userlike = like::where('user_id', '=', Auth::user()->id)->get();
        $userFollowing = Follower::where('user_id', $request)->with('following')->get();
        $userFollowers = Follower::where('user_id_following', '=', $request)->with('user')->get();
       

    


       
        

         return Inertia::render('Detailpage' , [
            'user' => $user,
            'posts' => $userspost
        ,   'allpost' => $userallpost
        ,   'like' => $userlike
        ,   'following' => $userFollowing
        ,   'follower' =>  $userFollowers
        ,   'action' => $request2
        ,   'notification' => $notification
        
      

        ]); 
  
    }


    public function showpost(alluser $alluser, $request, request $request2, post $post)
    {   
        $user = user::all()->where('id', '=', $request)->first();  
        $userspost = Post::where('id', $post->id)   // post sulla bacheca
        ->with('user' , 'comment.user' , 'like.user', 'comment.commentlikes.user', 'trend' )->get(); 
        $userallpost = Post::where('user_id', $request)->get();    
        $notification = notifications::where('user_id_receiver', '=', Auth::user()->id)->with('post', 'user_sender', 'user_receiver') ->get();
        $userlike = like::where('user_id', '=', Auth::user()->id)->get();
        $userFollowing = Follower::where('user_id', $request)->with('following')->get();
        $userFollowers = Follower::where('user_id_following', '=', $request)->with('user')->get();
       

    


       
        
      
         return Inertia::render('Detailpage' , [
            'user' => $user,
            'posts' => $userspost
        ,   'allpost' => $userallpost
        ,   'like' => $userlike
        ,   'following' => $userFollowing
        ,   'follower' =>  $userFollowers
        ,   'action' => $request2
        ,   'notification' => $notification
        
      

        ]); 
  
    }

    public function showpostlast5(alluser $alluser, $request, request $request2, post $post)
    {   
        $user = user::all()->where('id', '=', $request)->first();  
        $userspost = Post::latest()->take(5)->get();
        
        $userallpost = Post::where('user_id', $request)->get();    
        $notification = notifications::where('user_id_receiver', '=', Auth::user()->id)->with('post', 'user_sender', 'user_receiver') ->get();
        $userlike = like::where('user_id', '=', Auth::user()->id)->get();
        $userFollowing = Follower::where('user_id', $request)->with('following')->get();
        $userFollowers = Follower::where('user_id_following', '=', $request)->with('user')->get();
       

    


       
        
      
         return Inertia::render('Detailpage' , [
            'user' => $user,
            'posts' => $userspost
        ,   'allpost' => $userallpost
        ,   'like' => $userlike
        ,   'following' => $userFollowing
        ,   'follower' =>  $userFollowers
        ,   'action' => $request2
        ,   'notification' => $notification
        
      

        ]); 
  
    }







    public function search(Request $request, $input)
    {  
        $query = $request->input('query');

        // Utilizza l'operatore LIKE per cercare gli utenti il cui nome contiene la porzione del testo fornita
        $users = User::where('name', 'LIKE', '%'.$input .'%')->get();

        return response()->json(['users' => $users]);
    }









    /**
     * Show the form for editing the specified resource.
     */
    public function edit(alluser $alluser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatealluserRequest $request, alluser $alluser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(alluser $alluser)
    {
        //
    }
}


