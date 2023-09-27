<!-- src/QrCodeGenerator.svelte -->
<script>
  import { onMount } from 'svelte';

  let inputValue = '';
  let qrCodeUrl = '';

  function generateQRCode() {
    qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputValue)}&size=150x150`;
  }

  onMount(generateQRCode);
</script>

<style>
  div {
    text-align: center;
    margin: 20px;
  }

  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  input {
    font-size: 18px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2980b9;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
  }
</style>

<div>
  <h2>QR Code Generator</h2>
  <input type="text" bind:value={inputValue} placeholder="Enter text or URL" />
  <button on:click={generateQRCode}>Generate QR Code</button>

  {#if qrCodeUrl}
    <img src={qrCodeUrl} alt="QR Code" />
  {/if}
</div>
