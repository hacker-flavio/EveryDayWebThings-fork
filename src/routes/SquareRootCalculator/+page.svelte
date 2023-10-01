<!-- src/SquareRootCalculator.svelte -->


<head>
  <title>Square Root Calculator - Everyday Web Things</title>
  <meta name="description" content="Calculate square roots quickly and easily with our online square root calculator. Solve mathematical problems and find square root values." />
  <meta name="keywords" content="square root calculator, online calculator, mathematical calculator, square root values" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';

    let inputValue = '';
    let result = '';
  
    function calculateSquareRoot() {
      const number = parseFloat(inputValue);
      if (!isNaN(number) && number >= 0) {
        result = Math.sqrt(number).toFixed(2);
      } else {
        result = 'Invalid input';
      }
    }
  </script>
  
  <style>
    /* Add your CSS styles here */
  </style>
  
  <div>
    <h2>Square Root Calculator</h2>
    <input type="text" bind:value={inputValue} placeholder="Enter a non-negative number" />
    <button on:click={calculateSquareRoot}>Calculate</button>
    <p>
      {#if result !== 'Invalid input'}
        The square root of {inputValue} is {result}
      {:else}
        {result}
      {/if}
    </p>
  </div>
  