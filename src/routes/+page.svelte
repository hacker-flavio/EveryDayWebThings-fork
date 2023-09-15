<script>
  import { goto } from "@sveltejs/kit/router";
</script>

<main>
  <h1>Button Page</h1>
  <div class="button-row">
    <a href="/about" class="button-link">About</a>
    <a href="/about1" class="button-link">About1</a>
    <a href="/about2" class="button-link">About2</a>
    <a href="/about3" class="button-link">About3</a>
    <a href="/about4" class="button-link">About4</a>
  </div>
</main>

<style>
  .button-row {
    display: flex;
    justify-content: space-between;
    margin: 1inch;
  }

  .button-link {
    background-color: #007bff; /* You can set your desired background color */
    color: #fff;
    border: none;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 8px;
  }
  
  .button-link:hover {
    background-color: #0056b3; /* Change the color on hover if desired */
  }
</style>

