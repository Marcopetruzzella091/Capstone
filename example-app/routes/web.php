<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AlluserController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\WebScrapingController;
use App\Http\Controllers\CommentlikeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get ('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get ('/editprofile', [ProfileController::class, 'edit2'])->name('profile.edit2');
    Route::patch('/editprofile', [ProfileController::class, 'edit2done'])->name('profile.edit2done');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get ('/home', [AlluserController::class, 'index'])->name('alluser.index');
    Route::get ('/alluser/{id}', [AlluserController::class, 'show'])->name('alluser.show');
    Route::get ('/alluser/{id}/{post}', [AlluserController::class, 'showpost'])->name('alluser.showpost');
    Route::get ('/alluser/{id}/last', [AlluserController::class, 'showpostlast5'])->name('alluser.showpostlast5');
    Route::post ('/alluser', [AlluserController::class, 'store'])->name('alluser.store');
    Route::post ('/post', [PostController::class, 'store'])->name('post.store');
    Route::delete ('/post', [PostController::class, 'destroy'])->name('post.destroy');
    Route::get ('/search/{input}', [AlluserController::class, 'search'])->name('alluser.search');
    Route::post ('/comment', [CommentController::class, 'store'])->name('comment.store');
    Route::delete ('/comment', [CommentController::class, 'destroy'])->name('comment.destroy');

    Route ::post ('/like', [LikeController::class, 'store'])->name('like.store');

    Route ::post ('/follower', [FollowerController::class, 'store'])->name('follower.store');

    Route::get ('/notification', [NotificationsController::class, 'index'])->name('notification.index');
    
     Route::get('/', function () {
        return redirect()->action('App\Http\Controllers\AlluserController@show', ['id' => Auth::user()->id]);
    }); 

    Route::get('alluser', function () {
        return redirect()->action('App\Http\Controllers\AlluserController@show', ['id' => Auth::user()->id]);
    });

    Route::get('/crawler', [WebScrapingController::class, 'scrape'])->name('crawler.scrape');
    Route::get('/homepage', [AlluserController::class, 'index'])->name('alluser.index');
    Route::get('/homepage/{trend}', [AlluserController::class, 'indexshow'])->name('alluser.indexshow');
    Route::post('commentlike', [CommentlikeController::class, 'store'])->name('commentlike.store');

    Route::get ('/testevent}', function(){
        return "ciao";
    });
    

   /*  Route::get('dashboard', function () {
        return redirect()->action('App\Http\Controllers\AlluserController@show', ['id' => Auth::user()->id]);
    }); */
    
});

require __DIR__.'/auth.php';
