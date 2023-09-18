<script>
  let randomQuote = '';

  const generateRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      randomQuote = data.content;
    } catch (error) {
      console.error('Error fetching random quote:', error);
      randomQuote = 'Failed to fetch a quote.';
    }
  };
</script>

<div>
  <h2>Random Quote Generator</h2>
  <button on:click="{generateRandomQuote}">Generate Random Quote</button>
  {#if randomQuote}
    <p>"{randomQuote}"</p>
  {/if}
</div>
