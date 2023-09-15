<!-- SimplePage.svelte -->
<main>
  <div class="box-container">
    <!-- First Row -->
    <div class="box">
      <button class="box-button">Box 1</button>
    </div>
    <div class="box">
      <button class="box-button">Box 2</button>
    </div>
    <div class="box">
      <button class="box-button">Box 3</button>
    </div>

    <!-- Second Row -->
    <div class="box">
      <button class="box-button">Box 4</button>
    </div>
    <div class="box">
      <button class="box-button">Box 5</button>
    </div>
    <div class="box">
      <button class="box-button">Box 6</button>
    </div>
  </div>
</main>

<style>
  /* You can style the page and boxes as needed */
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .box-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .box {
    width: calc(33.33% - 20px); /* Adjust the width as needed */
    margin: 10px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-button {
    background-color: #4287f5;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .box-button:hover {
    background-color: #3366cc;
  }
</style>
