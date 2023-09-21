<script>
  let snake = [{x: 10, y: 10}];
  let direction = {x: 1, y: 0};
  
  function update() {
    const head = snake[0];
    const newHead = {x: head.x + direction.x, y: head.y + direction.y};
    snake = [newHead, ...snake.slice(0, -1)];
  }
  
  setInterval(update, 100);
</script>

<style>
  div {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: green;
  }
</style>

{#each snake as {x, y} (x)}
  <div style="left:{x*20}px;top:{y*20}px;"></div>
{/each}

