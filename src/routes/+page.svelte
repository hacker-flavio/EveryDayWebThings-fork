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
    display: block;
    text-align: center;
    padding: 15px 30px;
    font-size: 20px;
    line-height: 1.2; /* Added line-height property to ensure text stays within the button */
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
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
}

.button-row {
    display: flex;
    justify-content: space-between;
    margin: 1inch;
}

.button-wrapper {
    text-align: center;
    flex-grow: 1;
    margin: 0 5px;
}


</Style>

