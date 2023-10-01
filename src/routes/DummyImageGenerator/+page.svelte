<!-- src/routes/PlaceholderImage.svelte -->


<head>
  <title>Dummy Image Generator - Everyday Web Things</title>
  <meta name="description" content="Generate placeholder images for your web projects with our online dummy image generator. Create custom-sized images for design and development." />
  <meta name="keywords" content="dummy image generator, placeholder images, random images, image placeholders, web development" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';


  let imageSrc = '';

  // Function to generate a placeholder image
  function generatePlaceholderImage(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ddd'; // Gray background color
    ctx.fillRect(0, 0, width, height);

    // Text settings
    ctx.fillStyle = '#555';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Text to display (e.g., image dimensions)
    const text = `${width} x ${height}`;
    ctx.fillText(text, width / 2, height / 2);

    // Convert the canvas to a data URL
    imageSrc = canvas.toDataURL();
  }
</script>

<style>
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
    margin-top: 10px;
    margin-right: 10px;
  }

  button:hover {
    background-color: #2980b9;
  }

  img {
    display: block;
    margin: 20px auto;
    border: 2px solid #ccc;
    border-radius: 5px;
  }
</style>

<div>
  <h2>Placeholder Dummy Image</h2>
  <div>
    <button on:click={() => generatePlaceholderImage(400, 200)}>Generate 400x200</button>
    <button on:click={() => generatePlaceholderImage(800, 400)}>Generate 800x400</button>
  </div>
  {#if imageSrc}
    <img src={imageSrc} alt="Placeholder" />
  {/if}
</div>
