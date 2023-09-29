<main>
  <div class="category">
    <h2>Generators</h2>
    <div class="button-row">
        <a href="/passwordgenerator" class="btn btn-ghost btn-sm rounded-btn">Password Generator</a>
        <a href="/RandomWordGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Word Generator</a>
        <a href="/RandomQuoteGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Quote Generator</a>
        <a href="/RandomParagraphGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Paragraph Generator</a>
        <a href="/RandomNumberGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Number Generator</a>
        <a href="/DummyImageGenerator" class="btn btn-ghost btn-sm rounded-btn">Dummy Image Generator</a>
        <a href="/RandomColorGenerator" class="btn btn-ghost btn-sm rounded-btn">Random Color Generator</a>
        <a href="/QrCodeGenerator" class="btn btn-ghost btn-sm rounded-btn">Qr Code Generator</a>
        <a href="/ColorPaletteGenerator" class="btn btn-ghost btn-sm rounded-btn">Color Palette Generator</a>
      </div>
    </div>

    <div class="category">
      <h2>Productivity and Organization</h2>
      <div class="button-row">
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

    <div class="category">
      <h2>Calculators</h2>
      <div class="button-row">
        <a href="/BasicCalculator" class="btn btn-ghost btn-sm rounded-btn">Standard Calculator</a>
        <a href="/BudgetCalculator" class="btn btn-ghost btn-sm rounded-btn">Budget Calculator</a>
        <a href="/ScientificCalculator" class="btn btn-ghost btn-sm rounded-btn">Scientific Calculator</a>
        <a href="/SquareRootCalculator" class="btn btn-ghost btn-sm rounded-btn">Square Root Calculator</a>
        <a href="/PrecentageCalculator" class="btn btn-ghost btn-sm rounded-btn">Precentage Calculator</a>


      </div>
    </div>

    <div class="category">
      <h2>Writing & Image Tools</h2>
      <div class="button-row">
        <a href="/ImageResizer" class="btn btn-ghost btn-sm rounded-btn">Image Resizer</a>
        <a href="/ImageConverter" class="btn btn-ghost btn-sm rounded-btn">Image Converter</a>
        <a href="/ImageCompressor" class="btn btn-ghost btn-sm rounded-btn">Image Compressor</a>
        <a href="/PlaceholderImageMaker" class="btn btn-ghost btn-sm rounded-btn">Placeholder Image Maker</a>
        <a href="/WordFormater" class="btn btn-ghost btn-sm rounded-btn">Word Formater</a>
        <a href="/WordCounter" class="btn btn-ghost btn-sm rounded-btn">Word Counter</a>
        <a href="/TitleCapitlization" class="btn btn-ghost btn-sm rounded-btn">Title Capitlization</a>
      </div>
    </div>

  

    <div class="category">
      <h2>Entertainment and Daily Content</h2>
      <div class="button-row">
        <a href="/TikTacToe" class="btn btn-ghost btn-sm rounded-btn">Tik Tac Toe</a>
        <a href="/Snake" class="btn btn-ghost btn-sm rounded-btn">Snake</a>
        <a href="/JokeoftheDay" class="btn btn-ghost btn-sm rounded-btn">Joke of the Day</a>
        <a href="/DailyFunFact" class="btn btn-ghost btn-sm rounded-btn">Daily Fun Fact</a>
        <a href="/DailyBrainTeaser" class="btn btn-ghost btn-sm rounded-btn">DailyBrainTeaser</a>
      </div>
    </div>
</main>


<style>
/* Apply these styles to each category */
.category {
  margin-bottom: 20px; /* Add spacing between categories */
}

/* Style the headers (h2 elements) */
.category h2 {
  font-size: 1.5rem;
  margin-bottom: 10px; /* Add spacing between header and buttons */
}


/* Apply these styles to the button rows within each category */
.button-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Create 4 equal-width columns */
  gap: 10px; /* Add spacing between buttons */
  margin-bottom: 10px; /* Add spacing between rows */
  width: 100%; /* Allow the container to take up the full width */
  max-width: none; /* Remove max-width to allow overflow */
  overflow-x: auto; /* Enable horizontal scrolling if necessary */
}

/* Style the buttons within each button row */
.button-row a {
  text-decoration: none;
  color: #fff; /* Text color */
  background-color: #6D6D6D; /* Button background color */
  width: 100%; /* Occupy the full width of the column */
  height: auto; /* Allow button height to adjust based on content */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center; /* Center-align text */
  font-size: 12px; /* Reduced font size */
  white-space: normal; /* Allow text to wrap */
}

/* Mobile adjustments - adjust as needed */
@media (max-width: 768px) {
  .button-row {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
  }

  /* You can further adjust button styles for mobile here */
}




</style>



<script>
  import { onMount } from 'svelte';

  let page = '/'; // Set the page path to '/' for the home page

  // Function to track page view
  function trackPageView() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-H2EFXSCDHN', { 'page_path': page });
  }

  onMount(trackPageView);
</script>