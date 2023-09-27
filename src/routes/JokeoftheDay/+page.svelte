<!-- src/JokeOfTheDay.svelte -->
<script>
    let jokeIndex = 0;
  
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you get when you cross a snowman and a vampire? Frostbite!",
      // Add more jokes here...
    ];
  
    function getRandomJoke() {
      jokeIndex = Math.floor(Math.random() * jokes.length);
    }
  
    // Automatically update the joke every day (in milliseconds)
    const updateInterval = 24 * 60 * 60 * 1000; // 24 hours
  
    function updateJoke() {
      getRandomJoke();
    }
  
    // Initial joke update
    updateJoke();
  
    // Set up periodic joke updates
    setInterval(updateJoke, updateInterval);
  </script>
  
  <style>
    div {
      text-align: center;
      margin: 20px;
      background-color: #f7f7f7;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    h2 {
      font-size: 28px;
      color: #333;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 20px;
      margin-top: 20px;
      color: #555;
    }
  </style>
  
  <div>
    <h2>Joke of the Day</h2>
    <p>{jokes[jokeIndex]}</p>
  </div>
  