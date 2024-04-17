<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trend extends Model
{

     protected $fillable = [
        'post_id',
        'name',
     ];
    use HasFactory;

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
