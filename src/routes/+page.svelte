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
  display: block;
  width: 150px; /* Increase the width for better readability */
  height: 44px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-decoration: none; /* Remove underlines from links */
  text-align: center; /* Center text horizontally */
  line-height: 44px; /* Vertically center text */
  background-color: #3498db; /* Background color for buttons */
  color: #fff; /* Text color for buttons */
  font-weight: bold;
  transition: background-color 0.3s ease; /* Smooth hover effect */
}

.vertical-buttons a:hover {
  background-color: #2980b9; /* Background color on hover */
}

.button-row {
  display: flex;
  flex-wrap: wrap; /* Wrap button wrappers to the next line if needed */
  justify-content: space-between;
  margin: 1inch;
}

.button-wrapper {
  text-align: center;
  margin-bottom: 20px; /* Increase the spacing between button groups */
}

/* Optional: Add some space between button headings */
.button-wrapper h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

/* Optional: Adjust the size of the buttons for small screens */
@media (max-width: 768px) {
  .vertical-buttons a {
    width: 100%;
  }
}

</style>
