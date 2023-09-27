<!-- src/ScientificCalculator.svelte -->
<script>
  let expression = '';
  let result = '';

  function calculate() {
    try {
      result = eval(expression);
    } catch (error) {
      result = 'Error';
    }
  }

  function clear() {
    expression = '';
    result = '';
  }
</script>

<style>
  /* Add your CSS styles here */
</style>

<div>
  <h2>Scientific Calculator</h2>
  <input type="text" bind:value={expression} placeholder="Enter expression" />
  <button on:click={calculate}>Calculate</button>
  <button on:click={clear}>Clear</button>
  <p>Result: {result}</p>
</div>








