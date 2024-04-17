<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comment extends Model
{  
    protected $fillable = [
        'user_id',
        'post_id',
        'comment_content',
    ];

    use HasFactory;
    function user() {
        return $this->belongsTo(User::class);
    }

    function post() {
        return $this->belongsTo(Post::class);
    }
    public function commentlikes() {
        return $this->hasMany(commentlike::class);
    }
}
