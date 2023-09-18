<main>
  <div class="button-row">
    <div class="button-wrapper">
      <h2>Generators</h2>
      <!-- Container for vertical buttons with box-like styling -->
      <div class="vertical-buttons">
        <a href="/passwordgenerator" class="btn btn-ghost btn-sm rounded-btn">Password Generator</a>
        <a href="/RandomWordGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Word Generator</a>
        <a href="/RandomQuoteGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Quote Generator</a>
      </div>
    </div>
    <div class="button-wrapper">
      <h2>Weather</h2>
      <!-- Container for vertical buttons with box-like styling -->
      <div class="vertical-buttons">
        <a href="/SimpleWeatherInfo" class="btn btn-ghost btn-sm rounded-btn">Simple Weather Info</a>
      </div>
    </div>
    <div class="button-wrapper">
      <h2>Calculators</h2>
      <!-- Container for vertical buttons with box-like styling -->
      <div class="vertical-buttons">
        <a href="/BasicCalculator" class="btn btn-ghost btn-sm rounded-btn">Basic Calculator</a>
      </div>
    </div>
    <!-- Add 3 more buttons below -->
    <div class="button-wrapper">
      <h2>New Button 1</h2>
      <!-- Container for vertical buttons with box-like styling -->
      <div class="vertical-buttons">
        <a href="/new1" class="btn btn-ghost btn-sm rounded-btn">(blank)</a>
      </div>
    </div>
    <div class="button-wrapper">
      <h2>New Button 2</h2>
      <!-- Container for vertical buttons with box-like styling -->
      <div class="vertical-buttons">
        <a href="/new2" class="btn btn-ghost btn-sm rounded-btn">(blank)</a>
      </div>
    </div>
    <div class="button-wrapper">
      <h2>New Button 3</h2>
      <!-- Container for vertical buttons with box-like styling -->
      <div class="vertical-buttons">
        <a href="/new3" class="btn btn-ghost btn-sm rounded-btn">(blank)</a>
      </div>
    </div>
  </div>
</main>



<style>
  /* Common button styles */
  .vertical-buttons a {
    display: block;
    width: 150px; /* Adjust the width as needed */
    height: 50px; /* Adjust the height as needed */
    border-radius: 8px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 50px; /* Center the text vertically */
    font-size: 16px; /* Adjust the font size as needed */
    text-decoration: none;
    color: #333; /* Adjust the text color as needed */
    background-color: #f0f0f0; /* Adjust the background color as needed */
    transition: background-color 0.3s ease; /* Smooth hover transition */
  }

  /* Button hover effect */
  .vertical-buttons a:hover {
    background-color: #ddd; /* Adjust the hover background color as needed */
  }

  /* Main container for buttons */
  .button-row {
    display: flex;
    flex-wrap: wrap; /* Wrap buttons to the next row if necessary */
    justify-content: space-between;
    margin: 1inch;
  }

  /* Individual button container */
  .button-wrapper {
    text-align: center;
    width: 33%; /* Adjust the width for 3 columns */
  }

  /* Optional: Add some spacing around the buttons */
  .button-wrapper h2 {
    margin-bottom: 10px;
  }
</style>

