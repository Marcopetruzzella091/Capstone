<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'user_id',
        'post_content',
        'board_user_id',
        'trend',
       
    ];

    use HasFactory;
 
    public function comment() {
        return $this->hasMany(comment::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
    public function board() {
        return $this->belongsTo(Board::class);
    }
    public function like() {
        return $this->hasMany(like::class);
    }
    public function trend() { 
        return $this->hasMany(trend::class);
    }

    public function notifications() {
        return $this->hasMany(notifications::class);
    }
}
