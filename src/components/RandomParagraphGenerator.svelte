
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
</style>

<div>
  <h1>Random Paragraph Generator</h1>
  <button on:click={generateParagraph}>Generate Paragraph</button>
  {#if paragraphs.length > 0}
    <p>{paragraphs[0]}</p>
  {/if}
</div>
