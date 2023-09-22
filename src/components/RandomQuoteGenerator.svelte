<!-- src/RandomQuoteGenerator.svelte -->
<script>
  import { onMount } from 'svelte';

  let randomQuote = '';
  let authorFilter = 'All'; // Default filter option
  let numberOfQuotes = 1; // Default number of quotes to generate

  let quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
  ];

  function generateRandomQuotes() {
    let filteredQuotes = quotes;
    if (authorFilter !== 'All') {
      filteredQuotes = quotes.filter(quote => quote.author === authorFilter);
    }

    const randomQuotes = [];
    for (let i = 0; i < numberOfQuotes; i++) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      randomQuotes.push(filteredQuotes[randomIndex].text);
    }

    randomQuote = randomQuotes.join('\n\n');
  }

  onMount(() => {
    generateRandomQuotes();
  });
</script>

<main>
  <div>
    <h1>Random Quote Generator</h1>

    <label for="authorFilter">Filter by Author:</label>
    <select id="authorFilter" bind:value="{authorFilter}">
      <option value="All">All</option>
      <option value="Steve Jobs">Steve Jobs</option>
      <option value="Nelson Mandela">Nelson Mandela</option>
      <option value="Walt Disney">Walt Disney</option>
      <option value="Sam Levenson">Sam Levenson</option>
      <option value="Winston Churchill">Winston Churchill</option>
      <option value="Franklin D. Roosevelt">Franklin D. Roosevelt</option>
    </select>

    <label for="numberOfQuotes">Number of Quotes:</label>
    <input type="number" id="numberOfQuotes" bind:value="{numberOfQuotes}" min="1">

    <button on:click="{generateRandomQuotes}">Generate Random Quotes</button>

    {#if randomQuote}
      <p>Random Quotes:</p>
      <p>{randomQuote}</p>
    {:else}
      <p>No quotes generated yet.</p>
    {/if}
  </div>
</main>

<style>
  /* Add your CSS styles here (same styles as before) */
  div {
    text-align: center;
    margin: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  label {
    font-size: 20px;
    color: #333;
    margin-right: 10px;
  }

  select, input {
    font-size: 18px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
    margin-top: 10px;
  }

  button:hover {
    background-color: #2980b9;
  }

  p {
    font-size: 20px;
    margin-top: 20px;
    color: #555;
  }
</style>

