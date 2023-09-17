 <script>
  let randomWord = '';

  const generateRandomWord = () => {
    // Replace this with your own method to generate random words
    const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
  };
</script>

<div>
  <h2>Random Word Generator</h2>
  <button on:click="{generateRandomWord}">Generate Random Word</button>
  {#if randomWord}
    <p>The random word is: {randomWord}</p>
  {/if}
</div>



<style>
  div {
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 2px solid #333;
    border-radius: 5px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  p {
    font-size: 1.25rem;
    margin-top: 10px;
  }
</style>








