<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class notifications extends Model
{
    use HasFactory;
 protected  $fillable = [
        'user_id_sender',
        'user_id_receiver',
        'post_id',
        'notification_content',
    ];

    function user_sender()
    {
        return $this->belongsTo(User::class, 'user_id_sender');
    }

    function user_receiver()
    {
        return $this->belongsTo(User::class, 'user_id_receiver');
    }

    function post()
    {
        return $this->belongsTo(post::class, 'post_id');
    }
}
