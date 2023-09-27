<!-- src/PercentageCalculator.svelte -->
<script>
    let baseValue = '';
    let percentage = '';
    let result = '';
  
    function calculatePercentage() {
      const base = parseFloat(baseValue);
      const percent = parseFloat(percentage);
  
      if (!isNaN(base) && !isNaN(percent)) {
        result = ((base * percent) / 100).toFixed(2) + '%';
      } else {
        result = 'Invalid input';
      }
    }
  </script>
  
  <style>
    /* Add your CSS styles here */
  </style>
  
  <div>
    <h2>Percentage Calculator</h2>
    <input type="text" bind:value={baseValue} placeholder="Enter base value" />
    <input type="text" bind:value={percentage} placeholder="Enter percentage" />
    <button on:click={calculatePercentage}>Calculate</button>
    <p>
      {#if result !== 'Invalid input'}
        {baseValue} is {percentage}% of {result}
      {:else}
        {result}
      {/if}
    </p>
  </div>
  