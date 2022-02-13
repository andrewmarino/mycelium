<?php

namespace Database\Factories;

use App\Models\Fungi;
use App\Models\Group;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class FungiFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Fungi::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'       => Str::title($this->faker->words(2, true)),
            'slug'        => $this->faker->unique()->slug(),
            'common_name' => Str::title($this->faker->words(3, true)),
            'group_slug'  => Group::factory(),
        ];
    }
}
