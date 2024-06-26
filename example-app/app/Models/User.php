<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Auth\MustVerifyEmail;


class User extends Authenticatable 
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'image_url',
        'surname',
        'username',
        'years',
        'bio',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function post() {
        return $this->hasMany(Post::class);
    }
    public function comment() {
        return $this->hasMany(comment::class);
    }

    public function like() {
        return $this->hasMany(like::class);
    }

    public function followers()
    {
        return $this->hasMany(Follower::class, 'user_id', 'id');
    }
    public static function getUserFollowers()
    {
        // Ottieni l'ID dell'utente autenticato
        $userId = Auth::id();

        // Ottieni i follower dell'utente autenticato
        return self::findOrFail($userId)->followers;
    }
    public function commentlikes() {
        return $this->hasMany(commentlike::class);
    }

    public function notifications() {
        return $this->hasMany(Notification::class);
    }
    

    
}
