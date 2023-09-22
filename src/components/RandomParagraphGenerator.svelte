<script>
  let paragraphs = [];

  const generateParagraph = () => {
    // You can replace this array with your own set of paragraphs.
    const sampleParagraphs = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      // Add more paragraphs as needed.
    ];

    const randomIndex = Math.floor(Math.random() * sampleParagraphs.length);
    paragraphs = [sampleParagraphs[randomIndex]];
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

  h1 {
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
  <h1>Random Paragraph Generator</h1>
  <button on:click={generateParagraph}>Generate Paragraph</button>
  {#if paragraphs.length > 0}
    <p>{paragraphs[0]}</p>
  {/if}
</div>
