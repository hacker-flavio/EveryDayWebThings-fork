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
            background-color: #f7f7f7;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Style the heading */
        h2 {
            font-size: 28px;
            color: #333;
            margin-bottom: 10px;
        }

        /* Style the button */
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

        /* Style the quote paragraph */
        p {
            font-size: 20px;
            margin-top: 20px;
            color: #555;
            font-style: italic;
        }
    </style>
