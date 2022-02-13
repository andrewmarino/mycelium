<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Str;
use Orbit\Concerns\Orbital;

class Fungi extends Model
{
    use HasFactory, Orbital;

    /**
     * Define schema for a fungi.
     */
    public static function schema(Blueprint $table)
    {
        $table->string('title');
        $table->string('slug');
        $table->string('common_name')->nullable();
        $table->string('group_slug')->nullable();
    }

    public function getKeyName()
    {
        return 'slug';
    }

    public function getIncrementing()
    {
        return false;
    }

    /**
     * Taxonomy of fungi.
     */
    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    /**
     * Auto-generate a slug from the title.
     */
    public static function booted()
    {
        static::creating(function (Fungi $fungi) {
            if (!$fungi->slug) {
                $fungi->slug = Str::slug($fungi->title);
            }
        });

        static::updating(function (Fungi $fungi) {
            if (!$fungi->published) {
                $fungi->slug = Str::slug($fungi->title);
            }
        });
    }
}
