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









