<!-- Calculator.svelte -->

<script>
  let displayValue = "";

  function handleClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "=") {
      try {
        displayValue = eval(displayValue);
      } catch (error) {
        displayValue = "Error";
      }
    } else if (buttonValue === "C") {
      displayValue = "";
    } else {
      displayValue += buttonValue;
    }
  }
</script>

<div class="calculator">
  <div class="display">{displayValue}</div>
  <div class="buttons">
    <button on:click={handleClick}>1</button>
    <button on:click={handleClick}>2</button>
    <button on:click={handleClick}>3</button>
    <button on:click={handleClick}>4</button>
    <button on:click={handleClick}>5</button>
    <button on:click={handleClick}>6</button>
    <button on:click={handleClick}>7</button>
    <button on:click={handleClick}>8</button>
    <button on:click={handleClick}>9</button>
    <button on:click={handleClick}>0</button>
    <button on:click={handleClick}>+</button>
    <button on:click={handleClick}>-</button>
    <button on:click={handleClick}>*</button>
    <button on:click={handleClick}>/</button>
    <button on:click={handleClick} class="equals">=</button>
    <button on:click={handleClick} class="clear">C</button>
  </div>
</div>

<style>
  .calculator {
    width: 300px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }

  .display {
    font-size: 24px;
    text-align: right;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  button {
    font-size: 20px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  /* Styling for the "=" and "C" buttons */
  .equals {
    grid-column: span 2;
    background-color: #28a745;
  }

  .clear {
    background-color: #dc3545;
  }
</style>
