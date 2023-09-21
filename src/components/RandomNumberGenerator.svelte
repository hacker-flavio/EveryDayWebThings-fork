<!-- RandomNumberGenerator.svelte -->

<script>
  let randomNumber = null;

  const generateRandomNumber = () => {
    randomNumber = Math.floor(Math.random() * 100); // Change the range as needed
  };
</script>

<style>
  /* Add your CSS styles here */
</style>

<div>
  <h1>Random Number Generator</h1>
  <button on:click={generateRandomNumber}>Generate Random Number</button>
  {#if randomNumber !== null}
    <p>Random Number: {randomNumber}</p>
  {/if}
</div>

