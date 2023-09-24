<!-- AboutUs.svelte -->
<script>
  // You can define any dynamic data or logic for your About Us page here
</script>

<main class="about-us">
  <section>
    <h1>About Us</h1>
    <p>
      Welcome to everydaywebthings.com! We are a One-stop shop for simple and useful web tools and web apps.
    </p>
  </section>

  <section class="team">
    <h2>Our Team</h2>
    <ul>
      <li class="team-member">
        <h3>Sam Thibault</h3>
        <p>Founder & CEO</p>
      </li>

      <li class="team-member">
        <h3>Flavio Herrera</h3>
        <p>Co-Founder & Developer </p>
      </li>

      <li class="team-member">
        <h3>Jacob Macflee</h3>
        <p>Co-Founder & PR</p>
      </li>
    </ul>
  </section>

  <section class="buttons">
    <h2>Explore</h2>
    <div class="button-container">
      <a href="/contact" class="button contact-button">Contact Us</a>
      <a href="/privacy" class="button privacy-button">Privacy</a>
      <a href="/join" class="button join-button">Join Us</a>
    </div>
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

  .buttons {
    text-align: center;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }

  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    margin: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .button:hover {
    background-color: #0056b3;
  }

  .contact-button {
    background-color: #28a745;
  }

  .privacy-button {
    background-color: #6c757d;
  }

  .join-button {
    background-color: #ffc107;
  }
</style>










