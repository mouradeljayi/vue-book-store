<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
          'title' => $this->faker->sentence($nbWords = 3, $variableNbWords = true),
          'slug' => Str::slug($this->faker->sentence()),
          'category_id' => $this->faker->numberBetween($min = 1, $max = 12),
          'author' => $this->faker->name(),
          'description' => $this->faker->paragraph(),
          'stock' => 10,
          'price' => $this->faker->numberBetween($min = 100, $max = 900),
          'image' => "https://images-na.ssl-images-amazon.com/images/I/51B1D1nV5YL._SX379_BO1,204,203,200_.jpg",
        ];
    }
}
