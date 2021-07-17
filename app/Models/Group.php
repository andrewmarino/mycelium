<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Str;
use Orbit\Concerns\Orbital;

class Group extends Model
{
    use Orbital;

    public $timestamps = false;

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
