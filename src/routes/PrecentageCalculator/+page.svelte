<!-- src/PercentageCalculator.svelte -->


<head>
  <title>Percentage Calculator - Everyday Web Things</title>
  <meta name="description" content="Calculate percentages effortlessly with our online percentage calculator. Solve percentage problems, find discounts, and perform various percentage-related calculations." />
  <meta name="keywords" content="percentage calculator, online calculator, percentage problems, discount calculator, percentage calculations" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';


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
  