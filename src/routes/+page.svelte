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
</style>

<div class="menu">
  <div class="menuItem">Generators</div>
  <div class="menuItem">Weather</div>
  <div class="menuItem">Calculators</div>
  <div class="menuItem">Minigames</div>
  <div class="menuItem">More</div>
</div>
