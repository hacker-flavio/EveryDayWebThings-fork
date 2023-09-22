<!-- AboutUs.svelte -->
<script>
  // You can define any dynamic data or logic for your About Us page here
</script>

<main class="about-us">
  <section>
    <h1>About Us</h1>
    <p>
      Welcome to our About Us page. Here, we'll introduce you to our team and provide some background information about our company.
    </p>
  </section>

  <section class="team">
    <h2>Our Team</h2>
    <ul>
      <li class="team-member">
        <h3>John Doe</h3>
        <p>Founder and CEO</p>
        <p>John is a visionary leader with a passion for innovation...</p>
      </li>
      <!-- Add more team members as needed -->
    </ul>
  </section>

  <section class="history">
    <h2>Our History</h2>
    <p>
      Our company was founded in 20XX with a mission to...
    </p>
  </section>
</main>

<style>
  /* You can add your custom CSS styles here to style the page */
  .about-us {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
  }

  section {
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .team-member {
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .team-member h3 {
    font-size: 18px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
  }
</style>










