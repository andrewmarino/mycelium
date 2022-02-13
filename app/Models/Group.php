<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Str;
use Orbit\Concerns\Orbital;

class Group extends Model
{
    use HasFactory, Orbital;

    /**
     * Define schema for a group.
     */
    public static function schema(Blueprint $table)
    {
        $table->string('title');
        $table->string('slug');
    }

    public function getKeyName()
    {
        return 'slug';
    }

    public function getIncrementing()
    {
        return false;
    }

    public function fungis()
    {
        return $this->hasMany(Fungi::class);
    }

    public static function booted()
    {
        static::creating(function (Group $group) {
            if (!$group->slug) {
                $group->slug = Str::slug($group->title);
            }
        });

        static::updating(function (Group $group) {
            if (!$group->published) {
                $group->slug = Str::slug($group->title);
            }
        });
    }
}
