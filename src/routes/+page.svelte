<script>
  // Define an array of button labels
  let buttonLabels = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];
</script>

<style>
  /* Add styles for the button container */
  .button-container {
    display: flex;
    flex-direction: column;
    gap: 10px; /* Adjust the gap between rows */
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
  {#each buttonLabels as label (label)}
    <div class="button">{label}</div>
  {/each}
</div>

 
