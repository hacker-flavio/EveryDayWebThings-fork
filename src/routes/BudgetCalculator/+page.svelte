
<head>
  <title>Budget Calculator - Everyday Web Things</title>
  <meta name="description" content="Take control of your finances with our online budget calculator. Plan, track, and manage your expenses to achieve your financial goals." />
  <meta name="keywords" content="budget calculator, financial planning, expense tracking, budget management, personal finance" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';

  let income = 0;
  let expenses = 0;
  let total = 0;

  function calculateTotal() {
    total = income - expenses;
  }
</script>

<main>
  <h1>Budget Calculator</h1>
  
  <label class="input-label">
    Income:
    <input class="input-field" type="number" bind:value="{income}" on:input="{calculateTotal}" />
  </label>

  <label class="input-label">
    Expenses:
    <input class="input-field" type="number" bind:value="{expenses}" on:input="{calculateTotal}" />
  </label>

  <p class="total">Total: {total}</p>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    max-width: 400px;
    margin: auto;
  }

  .input-label {
    display: block;
    margin: 10px 0;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .total {
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
  }
</style>
