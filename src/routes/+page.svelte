<!-- ButtonPage.svelte -->
<script>
  // Define a function to handle button clicks
  function handleButtonClick(buttonNumber) {
    alert(`Button ${buttonNumber} clicked!`);
  }
</script>

<style>
  /* Style for the buttons */
  .button {
    width: 230px;
    height: 103px;
    border-radius: 8px;
    background-color: #007bff;
    color: #fff;
    text-align: center;
    line-height: 103px;
    cursor: pointer;
    margin: 10px;
  }
</style>

<div class="button" on:click={() => handleButtonClick(1)}>Button 1</div>
<div class="button" on:click={() => handleButtonClick(2)}>Button 2</div>
<div class="button" on:click={() => handleButtonClick(3)}>Button 3</div>
<div class="button" on:click={() => handleButtonClick(4)}>Button 4</div>
<div class="button" on:click={() => handleButtonClick(5)}>Button 5</div>
