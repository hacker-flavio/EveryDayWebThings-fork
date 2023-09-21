<!-- URLShortenerPage.svelte -->

<script>
  import URLShortener from '../../components/URLShortener.svelte';
</script>

<main>
  <URLShortener />
</main>



<script>
  let isMaintenance = true; // Set this to false when maintenance is completed

  // Function to toggle maintenance status
  function toggleMaintenance() {
    isMaintenance = !isMaintenance;
  }
</script>

{#if isMaintenance}
  <div class="maintenance-message">
    <p>This feature is currently under maintenance and might not work.</p>
    <button on:click={toggleMaintenance}>Resume Service</button>
  </div>
{:else}
  <!-- Your normal content goes here -->
{/if}

<style>
  .maintenance-message {
    background-color: #ff9999;
    padding: 16px;
    text-align: center;
    border: 1px solid #ff6666;
    border-radius: 4px;
  }

  button {
    background-color: #ff3333;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
  }
</style>







