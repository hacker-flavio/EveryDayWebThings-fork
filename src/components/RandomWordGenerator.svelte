<script>
  let randomWord = '';

  const generateRandomWord = () => {
    // You can replace this array with your own set of words.
    const words = [
      'apple', 'banana', 'cherry', 'date', 'elderberry',
      'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
      'mango', 'nectarine', 'orange', 'papaya', 'quince',
      'raspberry', 'strawberry', 'tangerine', 'watermelon', 'blueberry',
      'apricot', 'blackberry', 'cantaloupe', 'cranberry', 'dragonfruit',
      'guava', 'pineapple', 'plum', 'pomegranate', 'rhubarb',
      'boysenberry', 'kiwifruit', 'mulberry', 'passionfruit', 'starfruit',
      'acai', 'currant', 'elderflower', 'lychee', 'persimmon',
      'avocado', 'grapefruit', 'lime', 'coconut', 'peach',
      'pear', 'grape', 'tamarind', 'jackfruit', 'pawpaw',
      'cucumber', 'tomato', 'zucchini', 'potato', 'carrot',
      'broccoli', 'cauliflower', 'asparagus', 'lettuce', 'spinach',
      'celery', 'eggplant', 'pepper', 'onion', 'garlic',
      'cabbage', 'brussels', 'squash', 'radish', 'beet',
      'artichoke', 'kale', 'turnip', 'parsnip', 'rutabaga',
      'corn', 'peas', 'beans', 'lentils', 'chickpeas',
      'quinoa', 'barley', 'oats', 'rice', 'wheat',
      'oatmeal', 'bread', 'pasta', 'bagel', 'croissant',
      'muffin', 'pancake', 'waffle', 'doughnut', 'pretzel',
      'croissant', 'pizza', 'hamburger', 'sandwich', 'burrito',
      'sushi', 'taco', 'spaghetti', 'lasagna', 'noodle',
      'cheese', 'yogurt', 'milk', 'butter', 'cream',
      'honey', 'sugar', 'salt', 'pepper', 'cinnamon',
      'vanilla', 'chocolate', 'coffee', 'tea', 'juice',
      'water', 'wine', 'beer', 'cocktail', 'whiskey',
      'vodka', 'rum', 'gin', 'tequila', 'soda',
      'lemonade', 'smoothie', 'cider', 'chai', 'espresso',
      'latte', 'cappuccino', 'macchiato', 'frappuccino', 'mocha',
    ];

    const randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
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









