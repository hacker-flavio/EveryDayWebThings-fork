<script>
  import { goto } from "@sveltejs/kit/router";

  // Define the routes for the buttons
  const routes = ["/about", "/about1", "/about2", "/about3", "/about4"];

  // Function to navigate to a route
  function navigateTo(route) {
    goto(route);
  }
</script>

<main>
  <h1>Button Page</h1>
  <div class="button-row">
    {#each routes as route (route)}
      <button
        on:click={() => navigateTo(route)}
        class="button"
        style="width: 230px; height: 103px; border-radius: 8px; margin-right: 1rem;"
      >
        {route}
      </button>
    {/each}
  </div>
</main>

<style>
  .button-row {
    display: flex;
    justify-content: space-between;
    margin: 1inch;
  }

  .button {
    background-color: #007bff; /* You can set your desired background color */
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
