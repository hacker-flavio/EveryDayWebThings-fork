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
    'Countries',
    'Cities',
    'Vegetables',
    'Sports',
    'Professions',
    'Transportation',
    'Weather',
    'Hobbies',
    'Music',
    'Movies',
    'Food',
    'Body Parts',
    'Emotions',
    'Clothing',
    'Technology' // Added 'Technology' category
    // Add more categories as needed
  ];

  let words = {
    'Animals': ['Dog', 'Cat', 'Elephant', 'Lion', 'Monkey'],
    'Fruits': ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry'],
    'Colors': ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
    'Countries': ['USA', 'Canada', 'France', 'Germany', 'Australia'],
    'Cities': ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'],
    'Vegetables': ['Carrot', 'Broccoli', 'Tomato', 'Spinach', 'Potato'],
    'Sports': ['Soccer', 'Basketball', 'Tennis', 'Swimming', 'Golf'],
    'Professions': ['Doctor', 'Teacher', 'Engineer', 'Artist', 'Chef'],
    'Transportation': ['Car', 'Bicycle', 'Train', 'Bus', 'Boat'],
    'Weather': ['Sunny', 'Rainy', 'Snowy', 'Cloudy', 'Windy'],
    'Hobbies': ['Reading', 'Painting', 'Cooking', 'Gardening', 'Singing'],
    'Music': ['Rock', 'Pop', 'Hip-hop', 'Classical', 'Jazz'],
    'Movies': ['Action', 'Comedy', 'Drama', 'Horror', 'Science Fiction'],
    'Food': ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Ice Cream'],
    'Body Parts': ['Head', 'Heart', 'Arm', 'Leg', 'Eye'],
    'Emotions': ['Happy', 'Sad', 'Angry', 'Excited', 'Surprised'],
    'Clothing': ['Shirt', 'Dress', 'Jeans', 'Shoes', 'Hat'],
    'Technology': [
      'Computer', 'Smartphone', 'Tablet', 'Internet', 'Robot',
      'Programming', 'Software', 'Hardware', 'Algorithm', 'Database',
      'Cybersecurity', 'Artificial Intelligence', 'Virtual Reality',
      'Blockchain', 'Machine Learning', 'Cloud Computing', 'Network',
      'Server', 'Code', 'Website', 'Mobile App', 'User Interface',
      'Operating System', 'Browser', 'IoT', 'Encryption', 'API', 'Debugging'
    ] // Added 30 words for 'Technology' category
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
  /* Add your CSS styles here */
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

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 20px;
    color: #555;
    margin: 5px 0;
  }
</style>

