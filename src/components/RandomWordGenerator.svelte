<!-- src/RandomWordGenerator.svelte -->
<script>
  import { onMount } from 'svelte';

  let selectedCategory = 'All'; // Set the default category to 'All'
  let randomWords = [];
  let numberOfWords = 1; // Default number of words

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

  function generateRandomWords() {
    if (selectedCategory === 'All') {
      const allWords = categories
        .filter(category => category !== 'All')
        .map(category => words[category])
        .flat();

      randomWords = [];
      for (let i = 0; i < numberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * allWords.length);
        randomWords.push(allWords[randomIndex]);
      }
    } else {
      let categoryWords = words[selectedCategory];

      randomWords = [];
      for (let i = 0; i < numberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * categoryWords.length);
        randomWords.push(categoryWords[randomIndex]);
      }
    }
  }

  onMount(() => {
    generateRandomWords();
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

  <label for="numberOfWords">Number of Words:</label>
  <input type="number" id="numberOfWords" bind:value="{numberOfWords}" min="1">

  <button on:click="{generateRandomWords}">Generate Random Words</button>

  {#if randomWords.length > 0}
    <p>Random Words:</p>
    <ul>
      {#each randomWords as word (word)}
        <li>{word}</li>
      {/each}
    </ul>
  {:else}
    <p>No words generated yet.</p>
  {/if}
</main>

<style>
  /* Add your CSS styling here */
</style>
