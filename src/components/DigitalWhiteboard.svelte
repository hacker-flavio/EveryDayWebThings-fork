<!-- Whiteboard.svelte -->
<script>
  import { onMount } from 'svelte';

  let canvas;
  let ctx;
  let drawing = false;
  let textMode = false;
  let textX, textY;
  let backgroundColor = '#ffffff'; // Default background color
  let textColor = '#000000'; // Default text color
  let textItems = []; // Store text items
  let drawingItems = []; // Store drawing items
  let isFullScreen = false;

  onMount(() => {
    canvas = document.getElementById('whiteboardCanvas');
    ctx = canvas.getContext('2d');
    updateCanvas();
  });

  function startDrawing(event) {
    if (textMode) return;
    drawing = true;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    ctx.beginPath();
    ctx.moveTo(x, y);
    drawingItems.push({ type: 'start', x, y });
  }

  function draw(event) {
    if (!drawing || textMode) return;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    ctx.lineTo(x, y);
    ctx.stroke();
    drawingItems.push({ type: 'line', x, y });
  }

  function endDrawing() {
    if (textMode) return;
    drawing = false;
    drawingItems.push({ type: 'end' });
  }

  function toggleTextMode() {
    textMode = !textMode;
  }

  function addText(event) {
    if (!textMode) return;
    textX = event.clientX - canvas.getBoundingClientRect().left;
    textY = event.clientY - canvas.getBoundingClientRect().top;
    const text = prompt('Enter text:');
    if (text) {
      ctx.font = '18px Arial';
      ctx.fillStyle = textColor;
      ctx.fillText(text, textX, textY);
      ctx.fillStyle = backgroundColor;
      textItems.push({ type: 'text', text, x: textX, y: textY, color: textColor });
    }
  }

  function clearWhiteboard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    textItems = [];
    drawingItems = [];
    updateCanvas();
  }

  function updateCanvas() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = textColor;

    // Redraw text items
    for (const item of textItems) {
      ctx.font = '18px Arial';
      ctx.fillStyle = item.color;
      ctx.fillText(item.text, item.x, item.y);
      ctx.fillStyle = textColor;
    }

    // Redraw drawing items
    for (const item of drawingItems) {
      if (item.type === 'start') {
        ctx.beginPath();
        ctx.moveTo(item.x, item.y);
      } else if (item.type === 'line') {
        ctx.lineTo(item.x, item.y);
        ctx.stroke();
      } else if (item.type === 'end') {
        ctx.closePath();
      }
    }
  }

  function toggleFullScreen() {
    if (!isFullScreen) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
      } else if (canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
      } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
      } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    isFullScreen = !isFullScreen;
  }

  function saveAsImage() {
    const image = canvas.toDataURL('image/png');

    const a = document.createElement('a');
    a.href = image;
    a.download = 'whiteboard.png';
    a.click();
  }
</script>


<style>
  /* Styles for the buttons */
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .fullscreen-button {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #007bff;
    color: #fff;
  }

  .text-mode-button {
    position: absolute;
    top: 10px;
    left: 60px;
    background-color: #007bff;
    color: #fff;
  }

  .clear-button {
    position: absolute;
    top: 10px;
    left: 120px;
    background-color: #f44336;
    color: #fff;
    margin-right: 10px;
  }

  .save-button {
    position: absolute;
    top: 10px;
    left: 240px;
    background-color: #4caf50;
    color: #fff;
  }

  /* Styles for the canvas */
  #whiteboardCanvas {
    border: 1px solid #000;
    position: absolute;
    top: 40px;
    left: 10px;
  }
</style>

<!-- Your Svelte component's HTML code -->
<div style="position: relative;">
  <label for="bgColorPicker">Background Color:</label>
  <input type="color" id="bgColorPicker" bind:value="{backgroundColor}" on:change="{updateCanvas}" />

  <label for="textColorPicker">Text Color:</label>
  <input type="color" id="textColorPicker" bind:value="{textColor}" on:change="{updateCanvas}" />

  <button on:click="{toggleFullScreen}" class="fullscreen-button">Toggle Fullscreen</button>
  <button on:click="{toggleTextMode}" class="text-mode-button">Text Mode</button>

  <canvas
    id="whiteboardCanvas"
    width="800"
    height="600"
    on:mousedown="{startDrawing}"
    on:mousemove="{draw}"
    on:mouseup="{endDrawing}"
    on:mouseleave="{endDrawing}"
    on:click="{addText}"
  ></canvas>
</div>

<button on:click="{clearWhiteboard}" class="clear-button">Clear Whiteboard</button>
<button on:click="{saveAsImage}" class="save-button">Save as Image</button>












