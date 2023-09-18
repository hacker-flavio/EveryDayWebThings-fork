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
    <button on:click={handleClick}>=</button>
    <button on:click={handleClick}>C</button>
  </div>
</div>
