<?php



namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class alluser extends Model
{
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function projects(): HasMany {
        return $this->hasMany(Post::class);
    }
}
