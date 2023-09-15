<!-- +page.svelte -->

<script>
  // You can add any necessary logic here
</script>

<style>
  .button-row {
    display: flex;
    justify-content: space-between;
  }

  .button {
    width: 230px;
    height: 103px;
    border-radius: 8px;
    background-color: #007bff; /* You can change the background color */
    color: #fff; /* You can change the text color */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>

<div class="button-row">
  <div class="button" on:click={() => /* Handle button 1 click */}>
    Button 1
  </div>
  <div class="button" on:click={() => /* Handle button 2 click */}>
    Button 2
  </div>
  <div class="button" on:click={() => /* Handle button 3 click */}>
    Button 3
  </div>
  <div class="button" on:click={() => /* Handle button 4 click */}>
    Button 4
  </div>
  <div class="button" on:click={() => /* Handle button 5 click */}>
    Button 5
  </div>
</div>
