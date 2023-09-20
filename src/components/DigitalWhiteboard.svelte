<!-- Whiteboard.svelte -->
<script>
  import { onMount } from 'svelte';

  let canvas;
  let ctx;
  let drawing = false;
  let textMode = false;
  let textX, textY;
  let backgroundColor = '#ffffff'; // Default background color

  onMount(() => {
    canvas = document.getElementById('whiteboardCanvas');
    ctx = canvas.getContext('2d');
    updateBackgroundColor();
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
      ctx.fillText(text, textX, textY);
    }
  }

  function clearWhiteboard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBackgroundColor();
  }

  function updateBackgroundColor() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
  <input type="color" id="bgColorPicker" bind:value="{backgroundColor}" on:change="{updateBackgroundColor}" />
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
