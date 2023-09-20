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
  /* Styles for buttons */
  .button-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 5px;
    width: 200px;
  }

  .button-wrapper h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .vertical-buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-size: 16px;
    margin: 5px 0;
    border: 2px solid #3498db;
    border-radius: 8px;
    text-decoration: none;
    color: #3498db;
    transition: background-color 0.3s, color 0.3s;
  }

  .vertical-buttons a:hover {
    background-color: #3498db;
    color: #fff;
  }

  /* Other styles */
  .whiteboard-container {
    position: relative;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .color-pickers {
    display: flex;
    gap: 10px;
  }
</style>
