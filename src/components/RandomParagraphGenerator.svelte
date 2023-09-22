<!-- src/RandomParagraphGenerator.svelte -->
<script>
  import { onMount } from 'svelte';

  let randomParagraph = '';
  let numberOfParagraphs = 1; // Default number of paragraphs to generate

  // Sample paragraphs
  let paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis gravida eros. Vestibulum laoreet sem in nunc vestibulum, vel efficitur risus venenatis. Sed et dui et turpis tempor ultricies. Proin euismod venenatis sem, non fringilla eros dictum in. Nullam a ante velit. Curabitur consectetur arcu vel sollicitudin euismod. Nullam interdum auctor malesuada.",
    "Suspendisse potenti. Vestibulum facilisis volutpat congue. Praesent posuere vel elit ut volutpat. Suspendisse viverra enim nec elit posuere, a feugiat nisi interdum. Quisque non dolor ut dolor tincidunt vulputate. Vivamus hendrerit, justo ut tincidunt vehicula, tortor elit ullamcorper neque, id ultricies arcu neque sit amet eros.",
    "Fusce nec bibendum est. Etiam nec tincidunt mi, at aliquet dolor. Morbi eu dapibus purus. Maecenas interdum tortor eu dolor aliquet, eget malesuada sapien volutpat. Sed in massa in odio interdum pharetra in sit amet libero. Aenean fringilla odio eu mi consequat, in lacinia elit blandit.",
    // Add more paragraphs as needed
  ];

  function generateRandomParagraphs() {
    const randomParagraphs = [];
    for (let i = 0; i < numberOfParagraphs; i++) {
      const randomIndex = Math.floor(Math.random() * paragraphs.length);
      randomParagraphs.push(paragraphs[randomIndex]);
    }

    randomParagraph = randomParagraphs.join('\n\n');
  }

  onMount(() => {
    generateRandomParagraphs();
  });
</script>

<main>
  <div>
    <h1>Random Paragraph Generator</h1>

    <label for="numberOfParagraphs">Number of Paragraphs:</label>
    <input type="number" id="numberOfParagraphs" bind:value="{numberOfParagraphs}" min="1">

    <button on:click="{generateRandomParagraphs}">Generate Random Paragraphs</button>

    {#if randomParagraph}
      <p>Random Paragraphs:</p>
      <p>{randomParagraph}</p>
    {:else}
      <p>No paragraphs generated yet.</p>
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

  input {
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
