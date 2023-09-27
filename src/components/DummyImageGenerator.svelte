<!-- DummyImage.svelte -->
<script>
    let width = 300; // Default width
    let height = 200; // Default height
    let grayscale = false; // Default to color image
  
    // Function to generate a random image URL using Lorem Picsum
    function generateImage() {
      const imageUrl = `https://picsum.photos/${width}/${height}${grayscale ? '?grayscale' : ''}`;
      return imageUrl;
    }
  </script>
  
  <div>
    <label for="width">Width:</label>
    <input type="number" id="width" bind:value={width} />
  
    <label for="height">Height:</label>
    <input type="number" id="height" bind:value={height} />
  
    <label for="grayscale">Grayscale:</label>
    <input type="checkbox" id="grayscale" bind:checked={grayscale} />
  
    <br />
  
    <img {src} alt="Dummy Image" />
  
    <br />
  
    <button on:click={generateImage}>Generate Dummy Image</button>
  </div>
  
  <style>
    div {
      text-align: center;
      margin: 20px;
    }
  
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
  