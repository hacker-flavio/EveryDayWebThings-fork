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
        <a href="/DummyImageGgenerator" class="btn btn-ghost btn-sm rounded-btn">Dummy Image Ggenerator</a>
        <a href="/PlaceholderImageGenerator" class="btn btn-ghost btn-sm rounded-btn">Placeholder Image Generator</a>
        <a href="/RandomColorGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Color Generator</a>
        <a href="/QrCodeGenerator" class="btn btn-ghost btn-sm rounded-btn">Qr Code Generator</a>
        <a href="/ColorPaletteGenerator" class="btn btn-ghost btn-sm rounded-btn">Color Palette Generator</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>Productivity and Organization</h2>
      <div class="vertical-buttons">
        <a href="/DigitalWhiteboard" class="btn btn-ghost btn-sm rounded-btn">DigitalWhiteboard</a>
        <a href="/SimpleWeatherInfo" class="btn btn-ghost btn-sm rounded-btn">Simple Weather Info</a>
        <a href="/BasicTranslator" class="btn btn-ghost btn-sm rounded-btn">Basic Translator</a>
        <a href="/URLShortener" class="btn btn-ghost btn-sm rounded-btn">URL Shortener</a>
        <a href="/Timer" class="btn btn-ghost btn-sm rounded-btn">Timer</a>
        <a href="/StopWatch" class="btn btn-ghost btn-sm rounded-btn">StopWatch</a>
        <a href="/FlashCardMaker" class="btn btn-ghost btn-sm rounded-btn">Flash Card Maker</a>
        <a href="/DigitalCountdownCalendar" class="btn btn-ghost btn-sm rounded-btn">Digital Countdown Calendar</a>
        <a href="/Countdown" class="btn btn-ghost btn-sm rounded-btn">Countdown</a>
        <a href="/QuickPollCreator" class="btn btn-ghost btn-sm rounded-btn">Quick Poll Creator</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>Calculators</h2>
      <div class="vertical-buttons">
        <a href="/BasicCalculator" class="btn btn-ghost btn-sm rounded-btn">Standard Calculator</a>
        <a href="/BudgetCalculator" class="btn btn-ghost btn-sm rounded-btn">Budget Calculator</a>
        <a href="/ScientificCalculator" class="btn btn-ghost btn-sm rounded-btn">Scientific Calculator</a>
        <a href="/SquareRootCalculator" class="btn btn-ghost btn-sm rounded-btn">Square Root Calculator</a>
        <a href="/PrecentageCalculator" class="btn btn-ghost btn-sm rounded-btn">Precentage Calculator</a>


      </div>
    </div>

    <div class="button-wrapper">
      <h2>Image Tools</h2>
      <div class="vertical-buttons">

        <a href="/ImageResizer" class="btn btn-ghost btn-sm rounded-btn">Image Resizer</a>
        <a href="/ImageConverter" class="btn btn-ghost btn-sm rounded-btn">Image Converter</a>
        <a href="/ImageCompressor" class="btn btn-ghost btn-sm rounded-btn">Image Compressor</a>
        <a href="/PlaceholderImageMaker" class="btn btn-ghost btn-sm rounded-btn">Placeholder Image Maker</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>Writing tools</h2>
      <div class="vertical-buttons">
        <a href="/WordFormater" class="btn btn-ghost btn-sm rounded-btn">Word Formater</a>
        <a href="/WordCounter" class="btn btn-ghost btn-sm rounded-btn">Word Counter</a>
        <a href="/TitleCapitlization" class="btn btn-ghost btn-sm rounded-btn">Title Capitlization</a>
      </div>
    </div>

    <div class="button-wrapper">
      <h2>Entertainment and Daily Content</h2>
      <div class="vertical-buttons">
        <a href="/TikTacToe" class="btn btn-ghost btn-sm rounded-btn">Tik Tac Toe</a>
        <a href="/Snake" class="btn btn-ghost btn-sm rounded-btn">Snake</a>
        <a href="/JokeoftheDay" class="btn btn-ghost btn-sm rounded-btn">Joke of the Day</a>
        <a href="/DailyFunFact" class="btn btn-ghost btn-sm rounded-btn">Daily Fun Fact</a>
        <a href="/DailyBrainTeaser" class="btn btn-ghost btn-sm rounded-btn">DailyBrainTeaser</a>
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
    min-height: 100vh;
    margin: 0;
    background-color: #f0f0f0; /* Add a background color */
}

main {
    text-align: center;
}

/* Buttons styling */
.vertical-buttons a {
    display: inline-block;
    width: auto; /* Adjust as needed */
    min-width: 200px; /* Set a minimum width */
    padding: 14px 24px; /* Improved padding for better spacing */
    font-size: 18px;
    margin: 10px; /* Increased margin for better spacing */
    border: 2px solid #3498db;
    border-radius: 8px;
    text-decoration: none;
    color: #3498db;
    transition: background-color 0.3s, color 0.3s;
    background-color: #fff; /* Initial background color */
}

.vertical-buttons a:hover {
    background-color: #3498db;
    color: #fff;
}

/* Button wrapper */
.button-wrapper h2 {
    font-size: 20px; /* Increase the font size */
    margin-bottom: 12px; /* Enhanced margin */
    color: #333;
    font-weight: bold; /* Add bold font weight */
}

/* Flex container for buttons */
.button-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -10px; /* Improved spacing */
}

/* Individual button container */
.button-wrapper {
    text-align: center;
    flex-grow: 1;
    margin: 10px;
    /* Adjust the flex-basis if needed for different button widths */
}

/* Mobile optimization using media query */
@media (max-width: 768px) {
    .vertical-buttons a {
        min-width: 160px; /* Adjust for smaller screens */
        padding: 12px 20px; /* Adjusted padding */
        font-size: 16px;
        margin: 8px; /* Adjusted margin */
    }

    .button-wrapper h2 {
        font-size: 18px; /* Adjusted font size */
        margin-bottom: 10px; /* Adjusted margin */
    }

    .button-row {
        flex-direction: column;
    }

    .button-wrapper {
        flex-basis: calc(100% - 20px);
    }
}

    </style>
