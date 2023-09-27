<!-- src/DailyFunFact.svelte -->
<script>
    let factIndex = 0;
  
    const funFacts = [
      "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
      "Octopuses have three hearts. Two pump blood to the gills, and one pumps it to the rest of the body.",
      // Add more fun facts here...
    ];
  
    function getRandomFact() {
      factIndex = Math.floor(Math.random() * funFacts.length);
    }
  
    // Automatically update the fun fact every day (in milliseconds)
    const updateInterval = 24 * 60 * 60 * 1000; // 24 hours
  
    function updateFunFact() {
      getRandomFact();
    }
  
    // Initial fun fact update
    updateFunFact();
  
    // Set up periodic fun fact updates
    setInterval(updateFunFact, updateInterval);
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
    <h2>Daily Fun Fact</h2>
    <p>{funFacts[factIndex]}</p>
  </div>
  