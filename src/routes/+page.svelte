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
  .vertical-buttons a {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    border: 2px solid #3498db;
    border-radius: 8px;
    margin-bottom: 10px;
    color: #3498db;
    transition: background-color 0.3s;
}

.vertical-buttons a:hover {
    background-color: #3498db;
    color: #ffffff;
}

.button-wrapper h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333333;
}

.button-row {
    display: flex;
    justify-content: space-between;
    margin: 1inch;
}

.button-wrapper {
    text-align: center;
    max-width: 200px; /* Added max-width to prevent content from stretching too much */
}

</style>

