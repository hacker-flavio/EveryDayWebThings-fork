 <script>
  let randomWord = '';

  const generateRandomWord = () => {
    // Replace this with your own method to generate random words
    const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
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









