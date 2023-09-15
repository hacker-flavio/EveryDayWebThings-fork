<script>
  function handleClick(buttonIndex) {
    console.log(`Button ${buttonIndex} clicked`);
  }
</script>

<style>
  .button-row {
    display: flex;
    justify-content: space-between;
    margin: 1inch 0;
  }

  .button {
    width: 230px;
    height: 103px;
    border-radius: 8px;
    background-color: #007bff; /* You can change the background color */
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>

<div class="button-row">
  {#each [1, 2, 3, 4, 5] as buttonIndex}
    <div class="button" on:click={() => handleClick(buttonIndex)}>
      Button {buttonIndex}
    </div>
  {/each}
</div>
