<main>
  <div class="button-row">
    <div class="button-wrapper">
      <h2>Generators</h2>
      <div class="vertical-buttons">
        <a href="/passwordgenerator" class="btn btn-ghost btn-sm rounded-btn">Password Generator</a>
        <a href="/RandomWordGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Word Generator</a>
        <a href="/RandomQuoteGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Quote Generator</a>
        <a href="/RandomParagraphGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Paragraph Generator</a>
        <a href="/RandomNumberGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Number Generator</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>Weather</h2>
      <div class="vertical-buttons">
        <a href="/SimpleWeatherInfo" class="btn btn-ghost btn-sm rounded-btn">Simple Weather Info</a>
        <a href="/SimpleWeather" class="btn btn-ghost btn-sm rounded-btn">Weather Info</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>Calculators</h2>
      <div class="vertical-buttons">
        <a href="/BasicCalculator" class="btn btn-ghost btn-sm rounded-btn">Basic Calculator</a>
        <a href="/BudgetCalculator" class="btn btn-ghost btn-sm rounded-btn">Budget Calculator</a>
        <a href="/Scientific Calculator" class="btn btn-ghost btn-sm rounded-btn">Scientific Calculator</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>Other tools</h2>
      <div class="vertical-buttons">
        <a href="/URLShortener" class="btn btn-ghost btn-sm rounded-btn">URL Shortener</a>
        <a href="/DigitalWhiteboard" class="btn btn-ghost btn-sm rounded-btn">DigitalWhiteboard</a>
        <a href="/Timer" class="btn btn-ghost btn-sm rounded-btn">Timer</a>
        <a href="/Stopwatch" class="btn btn-ghost btn-sm rounded-btn">Stopwatch</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>New Button 2</h2>
      <div class="vertical-buttons">
        <a href="/new2" class="btn btn-ghost btn-sm rounded-btn">Button</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>Mini Games</h2>
      <div class="vertical-buttons">
        <a href="/TikTacToe" class="btn btn-ghost btn-sm rounded-btn">Tik Tac Toe</a>
        <a href="/Snake" class="btn btn-ghost btn-sm rounded-btn">Snake</a>
      </div>
    </div>
  </div>
</main>





<style>
        /* Center the entire main content */
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        main {
            text-align: center;
        }

        /* Updated CSS for desktop */
        .vertical-buttons a {
            display: block;
            width: 100%;
            height: 60px;
            padding: 10px 0;
            font-size: 18px;
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
            flex-wrap: wrap;
            justify-content: center;
            margin: 0 -10px;
        }

        .button-wrapper {
            text-align: center;
            flex-grow: 1;
            margin: 10px;
            flex-basis: calc(33.33% - 20px); /* Adjust to control button width */
        }

        /* Mobile optimization using media query */
        @media (max-width: 768px) {
            .vertical-buttons a {
                height: 40px;
                font-size: 14px;
                margin: 5px 0;
            }

            .button-wrapper h2 {
                font-size: 14px;
                margin-bottom: 5px;
            }
        }
    </style>

