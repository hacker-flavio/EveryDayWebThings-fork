<script>
  let randomWord = '';

  const generateRandomWord = () => {
    const categories = [
      ['apple', 'banana', 'cherry', 'date', 'elderberry'],
      ['dog', 'cat', 'rabbit', 'hamster', 'parrot'],
      ['ocean', 'forest', 'desert', 'mountain', 'river'],
      ['car', 'bicycle', 'bus', 'train', 'airplane'],
      ['book', 'movie', 'music', 'painting', 'sculpture'],
      ['computer', 'smartphone', 'tablet', 'laptop', 'gaming console'],
      ['pizza', 'sushi', 'burger', 'pasta', 'salad'],
      ['sunglasses', 'hat', 'scarf', 'gloves', 'umbrella'],
      ['guitar', 'piano', 'drums', 'violin', 'flute'],
      ['sunflower', 'rose', 'tulip', 'daisy', 'lily'],
      ['coffee', 'tea', 'juice', 'water', 'soda'],
      ['beach', 'mountain', 'city', 'countryside', 'island'],
      ['camera', 'binoculars', 'telescope', 'microscope', 'magnifier'],
      ['football', 'basketball', 'soccer', 'tennis', 'volleyball'],
      ['sweater', 'jacket', 'shirt', 'dress', 'jeans'],
      ['fireplace', 'candles', 'lantern', 'flashlight', 'torch'],
      ['tiger', 'elephant', 'lion', 'giraffe', 'rhinoceros'],
      ['planet', 'star', 'moon', 'comet', 'asteroid'],
      ['keyboard', 'mouse', 'monitor', 'printer', 'speakers'],
      ['broccoli', 'carrot', 'spinach', 'potato', 'pepper'],
      ['boat', 'kayak', 'canoe', 'yacht', 'submarine'],
      ['globe', 'map', 'compass', 'GPS', 'atlas'],
      ['glasses', 'contacts', 'sunglasses', 'goggles', 'monocle'],
      ['eagle', 'hawk', 'falcon', 'vulture', 'owl'],
      ['clock', 'watch', 'hourglass', 'sundial', 'calendar'],
      ['swimming', 'hiking', 'cycling', 'running', 'yoga'],
      ['couch', 'chair', 'table', 'bookshelf', 'lamp'],
      ['diamond', 'emerald', 'sapphire', 'ruby', 'amethyst'],
      ['paintbrush', 'canvas', 'easel', 'palette', 'watercolors'],
      ['soccer', 'basketball', 'tennis', 'golf', 'baseball'],
      ['suitcase', 'backpack', 'duffel bag', 'briefcase', 'tote'],
      ['kite', 'frisbee', 'yo-yo', 'hula hoop', 'juggling balls'],
      ['ballet', 'hip-hop', 'salsa', 'tango', 'breakdancing'],
      ['sunscreen', 'umbrella', 'hat', 'sunglasses', 'beach towel'],
      ['seashell', 'coral', 'seaweed', 'starfish', 'crab'],
      ['microphone', 'guitar', 'drums', 'keyboard', 'saxophone'],
      ['pencil', 'pen', 'marker', 'eraser', 'highlighter'],
      ['telescope', 'microscope', 'binoculars', 'magnifying glass', 'camera'],
      ['teapot', 'coffee maker', 'kettle', 'French press', 'espresso machine'],
      ['camera', 'binoculars', 'telescope', 'microscope', 'magnifier'],
      ['strawberry', 'blueberry', 'raspberry', 'blackberry', 'cranberry'],
      ['television', 'radio', 'smartphone', 'tablet', 'laptop'],
      ['moonlight', 'starlight', 'candlelight', 'lamplight', 'firelight'],
      ['skateboard', 'rollerblades', 'scooter', 'hoverboard', 'bike'],
      ['penguin', 'seal', 'walrus', 'narwhal', 'orca'],
      ['mountain', 'canyon', 'plateau', 'valley', 'hill'],
      ['flowerpot', 'vase', 'planter', 'urn', 'terrarium'],
      ['banana', 'grape', 'watermelon', 'kiwi', 'pineapple'],
      ['helicopter', 'hot air balloon', 'glider', 'paraglider', 'biplane'],
      // Add more categories with unique words as needed.
    ];

    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomCategoryIndex];

    const randomIndex = Math.floor(Math.random() * randomCategory.length);
    randomWord = randomCategory[randomIndex];
  };
</script>






<style>
  /* Add your CSS styles here */
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

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2980b9;
  }

  p {
    font-size: 20px;
    margin-top: 20px;
    color: #555;
  }
</style>

<div>
  <h2>Random Word Generator</h2>
  <button on:click="{generateRandomWord}">Generate Random Word</button>
  {#if randomWord}
    <p>The random word is: {randomWord}</p>
  {/if}
</div>









