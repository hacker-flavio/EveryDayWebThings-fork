<!-- RandomColor.svelte -->


<head>
  <title>Random Color Generator - Everyday Web Things</title>
  <meta name="description" content="Generate random colors and color palettes for your design projects with our online color generator. Explore endless creative possibilities." />
  <meta name="keywords" content="random color generator, generate colors, color palettes, design tool, creative inspiration" />
</head>



<script>
  let randomColor = generateRandomColor();

  // Function to generate a random color in hexadecimal format
  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to generate a new random color
  function generateNewColor() {
    randomColor = generateRandomColor();
  }
</script>

<div class="random-color-container">
  <div class="color-box" style="background-color: {randomColor}"></div>
  <button class="generate-button" on:click={generateNewColor}>Generate Random Color</button>
</div>

<style>
  .random-color-container {
    text-align: center;
    margin: 20px;
  }

  .color-box {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 20px auto;
  }

  .generate-button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .generate-button:hover {
    background-color: #2980b9;
  }
</style>
