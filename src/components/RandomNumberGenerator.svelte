<!-- src/RandomNumberGenerator.svelte -->
<script>
  import { onMount } from 'svelte';

  let randomNumber = '';
  let minNumber = 1; // Default minimum number

  function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * (minNumber + 1));
  }

  onMount(() => {
    generateRandomNumber();
  });
</script>

<main>
  <div>
    <h1>Random Number Generator</h1>

    <label for="minNumber">Minimum Number:</label>
    <input type="number" id="minNumber" bind:value="{minNumber}" min="-1000000" max="1000000">

    <button on:click="{generateRandomNumber}">Generate Random Number</button>

    {#if randomNumber !== ''}
      <p>Random Number:</p>
      <p>{randomNumber}</p>
    {:else}
      <p>No number generated yet.</p>
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
