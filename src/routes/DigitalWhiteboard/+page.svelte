<!-- +page.svelte -->
<script>
  import Whiteboard from '../../components/DigitalWhiteboard.svelte';
</script>

<main>
  <h1>Collaborative Virtual Whiteboard</h1>
  <Whiteboard />
</main>

<style>
  /* Style for regular buttons */
  .button {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .button:hover {
    background-color: #2980b9;
  }

  /* Style for the fullscreen button */
  .fullscreen-button {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  /* Style for the text mode button */
  .text-mode-button {
    position: absolute;
    top: 10px;
    left: 60px;
  }

  /* Style for the clear and save buttons */
  .control-button {
    margin: 10px;
  }
</style>
