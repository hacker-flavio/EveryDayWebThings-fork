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
    background-color: #e74c3c; /* Red color for "Clear Whiteboard" button */
  }

  .control-button:hover {
    background-color: #c0392b; /* Darker red on hover */
  }

  .save-button {
    margin: 10px;
    background-color: #27ae60; /* Green color for "Save as Image" button */
  }

  .save-button:hover {
    background-color: #219a52; /* Darker green on hover */
  }
</style>
