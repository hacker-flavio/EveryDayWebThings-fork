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











