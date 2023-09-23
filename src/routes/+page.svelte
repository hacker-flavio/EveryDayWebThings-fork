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
/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Style for the main container */
main {
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: row; /* Horizontal layout */
  justify-content: flex-start; /* Align items to the left */
  align-items: flex-start; /* Align items to the top */
  overflow-x: auto; /* Add horizontal scrolling if needed */
}

/* Style for button rows */
.button-row {
  display: flex;
  flex-direction: row; /* Horizontal layout */
  gap: 20px;
  align-items: flex-start; /* Align items to the top */
}

/* Style for button wrappers */
.button-wrapper {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  min-width: 200px; /* Adjust the minimum width as needed */
}

/* Style for headings */
h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

/* Style for vertical buttons */
.vertical-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Increase vertical gap */
}

/* Style for buttons */
.btn {
  display: inline-block;
  padding: 30px 20px; /* Increase vertical padding */
  text-align: center;
  text-decoration: none;
  border: 2px solid #007bff;
  border-radius: 4px;
  color: #007bff;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
  width: 100%; /* Ensure buttons take up the full width */
}

.btn:hover {
  background-color: #007bff;
  color: #fff;
}

/* Media query for mobile optimization */
@media (max-width: 768px) {
  .button-row {
    flex-direction: column; /* Vertical layout for mobile */
    gap: 20px;
  }

  .button-wrapper {
    margin-bottom: 20px; /* Add margin between button sections */
  }
}

</style>

