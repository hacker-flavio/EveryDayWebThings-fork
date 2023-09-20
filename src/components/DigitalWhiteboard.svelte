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

  onMount(() => {
    canvas = document.getElementById('whiteboardCanvas');
    ctx = canvas.getContext('2d');
    updateBackgroundAndTextColor();
  });

  function startDrawing(event) {
    if (textMode) return;
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
  }

  function draw(event) {
    if (!drawing || textMode) return;
    ctx.lineTo(event.clientX - canvas.getBoundingClientRect().left, event.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
  }

  function endDrawing() {
    if (textMode) return;
    drawing = false;
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
    }
  }

  function clearWhiteboard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBackgroundAndTextColor();
  }

  function updateBackgroundAndTextColor() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = textColor;
  }

  function saveAsImage() {
    const image = canvas.toDataURL('image/png');
    
    const a = document.createElement('a');
    a.href = image;
    a.download = 'whiteboard.png';
    a.click();
  }
</script>

<div style="position: relative;">
  <label for="bgColorPicker">Background Color:</label>
  <input type="color" id="bgColorPicker" bind:value="{backgroundColor}" on:change="{updateBackgroundAndTextColor}" />
  
  <label for="textColorPicker">Text Color:</label>
  <input type="color" id="textColorPicker" bind:value="{textColor}" on:change="{updateBackgroundAndTextColor}" />

  <canvas
    id="whiteboardCanvas"
    width="800"
    height="600"
    style="border: 1px solid #000;"
    on:mousedown="{startDrawing}"
    on:mousemove="{draw}"
    on:mouseup="{endDrawing}"
    on:mouseleave="{endDrawing}"
    on:click="{addText}"
  ></canvas>
  <button on:click="{toggleTextMode}" style="position: absolute; top: 10px; left: 10px;">Text Mode</button>
</div>

<button on:click="{clearWhiteboard}">Clear Whiteboard</button>
<button on:click="{saveAsImage}">Save as Image</button>
