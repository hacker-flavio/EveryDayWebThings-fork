<script>
  // Define an array of arrays for button labels
  let buttonLabels = [
    ["Button 1", "Button 2", "Button 3"],
    ["Button 4", "Button 5", "Button 6"],
    ["Button 7", "Button 8", "Button 9"],
    ["Button 10", "Button 11", "Button 12"],
    ["Button 13", "Button 14", "Button 15"]
  ];
</script>

<style>
  /* Style for the button container */
  .button-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Adjust the gap between rows */
  }

  /* Style for each row of buttons */
  .button-row {
    display: flex;
    gap: 10px; /* Adjust the gap between buttons in a row */
  }

  /* Style for each button */
  .button {
    width: 230px;
    height: 103px;
    border-radius: 8px;
    background-color: #007BFF; /* You can change the background color */
    color: white; /* Text color */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px; /* Adjust the font size */
  }
</style>

<div class="button-container">
  {#each [0, 1, 2, 3, 4] as rowIndex}
    <div class="button-row">
      {#each [0, 1, 2] as columnIndex}
        <div class="button">{buttonLabels[rowIndex][columnIndex]}</div>
      {/each}
    </div>
  {/each}
</div>
