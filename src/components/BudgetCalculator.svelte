<script>
  let income = 0;
  let expenses = 0;
  let total = 0;

  function calculateTotal() {
    total = income - expenses;
  }
</script>

<main>
  <h1>Budget Calculator</h1>
  
  <label>
    Income:
    <input type="number" bind:value="{income}" on:input="{calculateTotal}" />
  </label>

  <label>
    Expenses:
    <input type="number" bind:value="{expenses}" on:input="{calculateTotal}" />
  </label>

  <p>Total: {total}</p>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    max-width: 400px;
    margin: auto;
  }

  label {
    display: block;
    margin: 10px 0;
  }

  input {
    width: 100%;
    padding: 5px;
  }

  p {
    font-weight: bold;
  }
</style>
