<!-- URLShortener.svelte -->

<script>
  let originalURL = '';
  let shortenedURL = '';

  const generateShortenedURL = () => {
    // You can implement your URL shortening logic here.
    // For simplicity, we'll just generate a random string for demonstration purposes.
    const randomString = Math.random().toString(36).substring(2, 8);
    shortenedURL = `http://short.url/${randomString}`;
  };
</script>

<style>
  /* Add your CSS styles here */
</style>

<div>
  <h1>URL Shortener</h1>
  <input bind:value={originalURL} placeholder="Enter URL" />
  <button on:click={generateShortenedURL}>Generate Short URL</button>
  {#if shortenedURL !== ''}
    <p>Shortened URL: <a href={shortenedURL} target="_blank">{shortenedURL}</a></p>
  {/if}
</div>

