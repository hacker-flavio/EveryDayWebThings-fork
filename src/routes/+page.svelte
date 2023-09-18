<main>
  <div class="button-row">
    <div class="button-wrapper">
      <h2>Generators</h2>
      <div class="vertical-buttons">
        <a href="/passwordgenerator" class="btn btn-ghost btn-sm rounded-btn">Password Generator</a>
        <a href="/RandomWordGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Word Generator</a>
        <a href="/RandomQuoteGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Quote Generator</a>
      </div>
    </div>
    <div class="button-wrapper">
      <h2>Weather</h2>
      <div class="vertical-buttons">
        <a href="/SimpleWeatherInfo" class="btn btn-ghost btn-sm rounded-btn">Simple Weather Info</a>
      </div>
    </div>
    <div class="button-wrapper">
      <h2>Calculators</h2>
      <div class="vertical-buttons">
        <a href="/BasicCalculator" class="btn btn-ghost btn-sm rounded-btn">Basic Calculator</a>
      </div>
    </div>
    <!-- Add 3 more buttons below -->
    <div class="button-wrapper">
      <h2>New Button 1</h2>
      <div class="vertical-buttons">
        <a href="/new1" class="btn btn-ghost btn-sm rounded-btn">Button</a>
      </div>
    </div>
    <div class="button-wrapper">
      <h2>New Button 2</h2>
      <div class="vertical-buttons">
        <a href="/new2" class="btn btn-ghost btn-sm rounded-btn">Button</a>
      </div>
    </div>
    <div class="button-wrapper">
      <h2>New Button 3</h2>
      <div class="vertical-buttons">
        <a href="/new3" class="btn btn-ghost btn-sm rounded-btn">Button</a>
      </div>
    </div>
  </div>
</main>





<Style>
 .vertical-buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px; /* Reduced button height for mobile */
    padding: 0 10px; /* Reduced padding for mobile */
    font-size: 14px; /* Smaller font size for mobile */
    margin: 5px 0;
    border: 2px solid #3498db;
    border-radius: 8px;
    text-decoration: none;
    color: #3498db;
    transition: background-color 0.3s, color 0.3s;
}

.vertical-buttons a:hover {
    background-color: #3498db;
    color: #fff;
}

.button-wrapper h2 {
    font-size: 14px; /* Smaller font size for mobile */
    margin-bottom: 5px; /* Reduced margin for mobile */
    color: #333;
}

.button-row {
    flex-direction: column; /* Stack buttons vertically on mobile */
    margin: 10px; /* Increased margin for better spacing on mobile */
}

.button-wrapper {
    text-align: center;
    margin: 5px 0; /* Adjusted margin for mobile */
}

</Style>

