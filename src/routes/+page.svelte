<!-- Page.svelte -->

<style>
  .menu {
    display: flex;
    flex-direction: row; /* Ensure items are in a horizontal line */
    justify-content: space-between;
    align-items: center;
    padding: 1inch 0;
  }

  .menuItem {
    margin: 0 1.5inch; /* 1.5 inches of space between each menuItem */
  }

  .buttonContainer {
    display: flex;
    flex-direction: column; /* Arrange buttons vertically */
    align-items: center;
    margin-top: 0.5inch; /* Half-inch space below Generators */
  }

  .button {
    width: 230px;
    height: 103px;
    background-color: #007bff; /* Example background color */
    color: #fff; /* Example text color */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5inch; /* Half-inch space between buttons */
  }
</style>

<div class="menu">
  <div class="menuItem">Generators</div>
  <div class="menuItem">Weather</div>
  <div class="menuItem">Calculators</div>
  <div class="menuItem">Minigames</div>
  <div class="menuItem">More</div>
</div>

<div class="buttonContainer">
  <div class="button">Button 1</div>
  <div class="button">Button 2</div>
  <div class="button">Button 3</div>
  <div class="button">Button 4</div>
</div>

