<!-- src/ColorPalette.svelte -->
<script>
    let colors = ['#FF5733', '#33FF57', '#5733FF'];
    let newColor = '';
  
    function addColor() {
      if (newColor) {
        colors = [...colors, newColor];
        newColor = '';
      }
    }
  
    function removeColor(index) {
      colors.splice(index, 1);
    }
  </script>
  
  <style>
    /* Add your CSS styles here */
  </style>
  
  <div>
    <h2>Color Palette Generator</h2>
    <input type="color" bind:value={newColor} />
    <button on:click={addColor}>Add Color</button>
  
    <ul>
      {#each colors as color, index (color)}
        <li>
          <div class="color-box" style="background-color: {color}"></div>
          {color}
          <button on:click={() => removeColor(index)}>Remove</button>
        </li>
      {/each}
    </ul>
  </div>
  