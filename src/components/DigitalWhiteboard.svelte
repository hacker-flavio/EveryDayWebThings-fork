<!-- Whiteboard.svelte -->
<script>
  let drawing = false;
  let lines = [];

  function startDrawing(event) {
    drawing = true;
    lines.push([{ x: event.clientX, y: event.clientY }]);
  }

  function draw(event) {
    if (!drawing) return;

    const line = lines[lines.length - 1];
    line.push({ x: event.clientX, y: event.clientY });
    lines = [...lines];
  }

  function endDrawing() {
    drawing = false;
  }

  function clearWhiteboard() {
    lines = [];
  }

  function saveAsImage() {
    const canvas = document.getElementById('whiteboardCanvas');
    const image = canvas.toDataURL('image/png');
    
    const a = document.createElement('a');
    a.href = image;
    a.download = 'whiteboard.png';
    a.click();
  }
</script>

<div
  on:mousedown="{startDrawing}"
  on:mousemove="{draw}"
  on:mouseup="{endDrawing}"
  on:mouseleave="{endDrawing}"
  style="position: relative; width: 800px; height: 600px; border: 1px solid #000;"
>
  <canvas
    id="whiteboardCanvas"
    width="800"
    height="600"
    style="position: absolute; top: 0; left: 0;"
  ></canvas>
</div>

<button on:click="{clearWhiteboard}">Clear Whiteboard</button>
<button on:click="{saveAsImage}">Save as Image</button>
