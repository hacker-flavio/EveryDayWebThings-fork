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
  div {
    text-align: center;
    margin: 20px;
  }

  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  input[type="color"] {
    width: 50px;
    height: 50px;
    border: none;
    padding: 0;
    margin-right: 10px;
    vertical-align: middle;
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
  }

  button:hover {
    background-color: #2980b9;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .color-box {
    width: 30px;
    height: 30px;
    border: 2px solid #000;
    border-radius: 5px;
    margin-right: 10px;
  }
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
