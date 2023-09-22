<!-- src/RandomWordGenerator.svelte -->
<script>
  import { onMount } from 'svelte';

  let selectedCategory = 'All'; // Set the default category to 'All'
  let randomWord = '';

  let categories = [
    'All',
    'Animals',
    'Fruits',
    'Colors',
    // Add more categories as needed
  ];

  let words = {
    'Animals': ['Dog', 'Cat', 'Elephant', 'Lion', 'Monkey'],
    'Fruits': ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry'],
    'Colors': ['Red', 'Blue', 'Green', 'Yellow', 'Purple']
    // Add more words for each category as needed
  };

  function generateRandomWord() {
    if (selectedCategory === 'All') {
      const allWords = categories
        .filter(category => category !== 'All')
        .map(category => words[category])
        .flat();
      randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    } else {
      let categoryWords = words[selectedCategory];
      randomWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];
    }
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

<style>
  /* Add your CSS styling here */
</style>
