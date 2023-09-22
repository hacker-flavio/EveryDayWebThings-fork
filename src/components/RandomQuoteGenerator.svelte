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



<style>
        /* Style the container div */
        div {
            text-align: center;
            margin: 20px;
        }

        /* Style the heading */
        h2 {
            font-size: 24px;
            color: #333;
        }

        /* Style the button */
        button {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
        }

        button:hover {
            background-color: #2980b9;
        }

        /* Style the quote paragraph */
        p {
            font-size: 18px;
            margin-top: 10px;
            color: #555;
        }
    </style>
