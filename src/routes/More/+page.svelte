
<main>
  <div class="container">
    <h1>Sorry! This Feature is Not Available</h1>
    <p>Please check back later for updates.</p>
    <p>Status: <span class="status">503 Service Unavailable</span></p>
  </div>
</main>

<script>
  import GoogleAds from '../../components/GoogleAds.svelte';
</script>



<style>
  /* You can style the page as needed */
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }

  .container {
    text-align: center;
    margin: 2rem auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    color: #666;
  }

  .status {
    font-weight: bold;
    color: #e74c3c; /* Red color for status */
  }
</style>








