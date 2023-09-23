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
/* Center the main content vertically and horizontally */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4; /* Set background color */
}

/* Center-align the content within the main element */
main {
    text-align: center;
}

/* Button styles for both desktop and mobile */

/* Shared button styles */
.button {
    display: block;
    width: 100%;
    padding: 15px 0; /* Increase padding for a more spacious feel */
    font-size: 22px; /* Larger font size */
    margin: 15px 0; /* Wider margin between buttons */
    border: 2px solid #3498db;
    border-radius: 10px; /* Slightly rounder corners */
    text-decoration: none;
    color: #fff; /* White text color */
    background-color: #3498db; /* Background color */
    transition: background-color 0.3s, color 0.3s;
}

/* Hover styles for buttons */
.button:hover {
    background-color: #266687; /* Darker background color on hover */
}

/* Header style for button sections */
.button-header {
    font-size: 28px; /* Larger font size for headers */
    margin-bottom: 20px; /* Wider margin for headers */
    color: #333;
    text-transform: uppercase; /* Uppercase text */
    letter-spacing: 2px; /* Add letter spacing for headings */
}

/* Button container styles */
.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -20px; /* Wider negative margin for button containers */
}

/* Individual button wrapper styles */
.button-wrapper {
    text-align: center;
    flex-grow: 1;
    margin: 20px; /* Wider margin for buttons */
    flex-basis: calc(33.33% - 40px); /* Adjust to control button width with wider spacing */
    background-color: #fff; /* White background for buttons */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
    transition: transform 0.2s ease-in-out; /* Add a slight transform effect on hover */
}

/* Hover effect for button containers */
.button-wrapper:hover {
    transform: translateY(-5px); /* Move buttons up slightly on hover */
}

/* Mobile optimization using media query */
@media (max-width: 768px) {
    /* Adjust button height and font size for mobile */
    .button {
        height: 60px; /* Slightly taller buttons for mobile */
        font-size: 18px; /* Slightly smaller font size for mobile */
        margin: 15px 0; /* Wider margin between buttons for mobile */
    }

    /* Adjust header font size and margin for mobile */
    .button-header {
        font-size: 24px; /* Slightly larger font size for mobile headers */
        margin-bottom: 15px; /* Wider margin for mobile headers */
    }

    /* Change button container direction to column for mobile */
    .button-container {
        flex-direction: column;
        margin: 0; /* Reset margin for mobile containers */
    }

    /* Adjust button width for mobile */
    .button-wrapper {
        flex-basis: calc(100% - 40px); /* Full-width buttons for mobile with wider spacing */
        margin: 15px 0; /* Wider margin for mobile buttons */
    }
}


</style>

