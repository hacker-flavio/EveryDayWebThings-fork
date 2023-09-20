<!-- +page.svelte -->
<script>
  import Whiteboard from '../../components/DigitalWhiteboard.svelte';
</script>

<main>
  <h1>Collaborative Virtual Whiteboard</h1>
  <Whiteboard />
</main>

<style>
  main {
    text-align: center;
    margin: 50px auto;
  }
/* whiteboard.css */

div {
  text-align: center;
}

label {
  margin-right: 10px;
}

canvas {
  border: 1px solid #000;
  cursor: crosshair;
}

button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
