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
    /* Add your CSS styles here */
  </style>
  
  <div>
    <h2>QR Code Generator</h2>
    <input type="text" bind:value={inputValue} placeholder="Enter text or URL" />
    <button on:click={generateQRCode}>Generate QR Code</button>
  
    {#if qrCodeUrl}
      <img src={qrCodeUrl} alt="QR Code" />
    {/if}
  </div>
  