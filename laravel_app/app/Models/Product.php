<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'category_id', 'author', 'description', 'stock', 'qty', 'price', 'image'];

    public function getRouteKeyName()
    {
    	return 'slug';
    }

}
