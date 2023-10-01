<!-- src/RandomQuoteGenerator.svelte -->

<head>
  <title>Random Quote Generator - Everyday Web Things</title>
  <meta name="description" content="Get inspired with our random quote generator. Explore famous quotes, wisdom, and motivation at the click of a button." />
  <meta name="keywords" content="random quote generator, inspirational quotes, famous quotes, motivation, wisdom" />
</head>


<script>

import GoogleAds from '../../components/GoogleAds.svelte';

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
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
    { text: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
    { text: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  ];

  // Extract all unique authors from the quotes array
  let uniqueAuthors = [...new Set(quotes.map(quote => quote.author))];

  onMount(() => {
    generateRandomQuotes();
  });

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
</script>

<main>
  <div>
    <h1>Random Quote Generator</h1>

    <label for="authorFilter">Filter by Author:</label>
    <select id="authorFilter" bind:value="{authorFilter}">
      <option value="All">All</option>
      {#each uniqueAuthors as author (author)}
        <option value="{author}">{author}</option>
      {/each}
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
