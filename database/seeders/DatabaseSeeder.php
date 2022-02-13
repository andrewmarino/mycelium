<?php

namespace Database\Seeders;

use App\Models\Fungi;
use App\Models\Group;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $group = Group::factory()->create();

        Fungi::factory(25)->create([
            'group_slug' => $group->slug,
        ]);
    }
}
