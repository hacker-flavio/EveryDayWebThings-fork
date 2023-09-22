<!-- src/RandomWordGenerator.svelte -->
<script>
  import { onMount } from 'svelte';

  let selectedCategory = '';
  let randomWord = '';

  let categories = [
    'Animals',
    'Fruits',
    'Colors',
    'Countries',
    'Sports',
    'Vegetables',
    'Vehicles',
    'Professions',
    'Hobbies',
    'Weather',
    'Emotions',
    'Body Parts',
    'Shapes',
    'Planets',
    'Insects',
    'Furniture',
    'Clothing',
    'Music Genres',
    'Desserts',
  ];

  let words = {
    'Animals': ['Dog', 'Cat', 'Elephant', 'Lion', 'Monkey'],
    'Fruits': ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry'],
    'Colors': ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
    'Countries': ['USA', 'Canada', 'France', 'Japan', 'Australia'],
    'Sports': ['Football', 'Basketball', 'Soccer', 'Tennis', 'Swimming'],
    'Vegetables': ['Carrot', 'Broccoli', 'Tomato', 'Cucumber', 'Spinach'],
    'Vehicles': ['Car', 'Bicycle', 'Bus', 'Motorcycle', 'Train'],
    'Professions': ['Doctor', 'Teacher', 'Engineer', 'Artist', 'Chef'],
    'Hobbies': ['Reading', 'Painting', 'Cooking', 'Gardening', 'Photography'],
    'Weather': ['Sunny', 'Rainy', 'Cloudy', 'Snowy', 'Windy'],
    'Emotions': ['Happy', 'Sad', 'Angry', 'Surprised', 'Excited'],
    'Body Parts': ['Hand', 'Foot', 'Head', 'Heart', 'Eye'],
    'Shapes': ['Circle', 'Square', 'Triangle', 'Rectangle', 'Oval'],
    'Planets': ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'],
    'Insects': ['Ant', 'Butterfly', 'Spider', 'Bee', 'Ladybug'],
    'Furniture': ['Chair', 'Table', 'Sofa', 'Bed', 'Cabinet'],
    'Clothing': ['Shirt', 'Pants', 'Dress', 'Shoes', 'Hat'],
    'Music Genres': ['Rock', 'Pop', 'Hip-Hop', 'Jazz', 'Country'],
    'Desserts': ['Cake', 'Ice Cream', 'Cookies', 'Pie', 'Brownie'],
  };

  function generateRandomWord() {
    let categoryWords = words[selectedCategory];
    randomWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
  }

  onMount(() => {
    generateRandomWord();
  });
</script>

<main>
  <h1>Random Word Generator</h1>

  <label for="category">Select a Category:</label>
  <select id="category" bind:value="{selectedCategory}">
    {#each categories as category (category)}
      <option value="{category}">{category}</option>
    {/each}
  </select>

  <button on:click="{generateRandomWord}">Generate Random Word</button>

  <p>Random Word: {randomWord}</p>
</main>







