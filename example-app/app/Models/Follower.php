<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
   protected $fillable = ['user_id', 'user_id_following'];

    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function followedUser()
{
    return $this->belongsTo(User::class, 'followed_id');
}


public function following()
{
    // Assumendo che il tuo modello utente si chiami User e la chiave esterna sia user_id_following
    return $this->belongsTo(User::class, 'user_id_following');
}
}
