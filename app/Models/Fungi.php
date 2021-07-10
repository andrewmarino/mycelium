<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Str;
use Orbit\Concerns\Orbital;

class Fungi extends Model
{
    use Orbital;

    /**
     * Define schema for a fungi.
     */
    public static function schema(Blueprint $table)
    {
        $table->string('title');
        $table->string('slug');
        $table->string('common_name')->nullable();
    }

    /**
     * Auto-generate a slug from the title.
     */
    public static function booted()
    {
        static::creating(function (Fungi $fungi) {
            if (!$fungi->slug) {
                $fungi->fungi = Str::slug($fungi->title);
            }
        });
    }
}
