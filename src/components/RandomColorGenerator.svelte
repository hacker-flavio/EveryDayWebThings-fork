<!-- RandomColor.svelte -->
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
  
  <div>
    <div class="color-box" style="background-color: {randomColor}"></div>
    <button on:click={generateNewColor}>Generate Random Color</button>
  </div>
  
  <style>
    div {
      text-align: center;
      margin: 20px;
    }
  
    .color-box {
      width: 200px;
      height: 200px;
      border: 2px solid #000;
    }
  </style>
  