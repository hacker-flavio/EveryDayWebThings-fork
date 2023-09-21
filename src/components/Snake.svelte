<script>
  let gridSize = 20; // Size of each grid cell
  let width = 20;    // Number of grid cells horizontally
  let height = 15;   // Number of grid cells vertically

  let snake = [{ x: 5, y: 5 }]; // Initial position of the snake
  let food = getRandomPosition(); // Initial position of the food
  let direction = "right"; // Initial direction of the snake
  let gameOver = false;

  function getRandomPosition() {
    // Generate a random position for the food
    return {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };
  }

  function moveSnake() {
    if (gameOver) return;

    // Calculate the new head position based on the direction
    let newHead = { ...snake[0] };
    switch (direction) {
      case "up":
        newHead.y -= 1;
        break;
      case "down":
        newHead.y += 1;
        break;
      case "left":
        newHead.x -= 1;
        break;
      case "right":
        newHead.x += 1;
        break;
    }

    // Check for collisions with the walls or itself
    if (
      newHead.x < 0 ||
      newHead.x >= width ||
      newHead.y < 0 ||
      newHead.y >= height ||
      snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
    ) {
      gameOver = true;
      return;
    }

    // Check if the snake eats the food
    if (newHead.x === food.x && newHead.y === food.y) {
      // Increase the length of the snake
      snake = [newHead, ...snake];
      // Generate a new food position
      food = getRandomPosition();
    } else {
      // Move the snake by adding the new head and removing the tail
      snake = [newHead, ...snake.slice(0, -1)];
    }
  }

  function handleKeydown(event) {
    // Update the direction based on the arrow keys
    switch (event.key) {
      case "ArrowUp":
        if (direction !== "down") direction = "up";
        break;
      case "ArrowDown":
        if (direction !== "up") direction = "down";
        break;
      case "ArrowLeft":
        if (direction !== "right") direction = "left";
        break;
      case "ArrowRight":
        if (direction !== "left") direction = "right";
        break;
    }
  }

  let gameInterval = setInterval(moveSnake, 200);

  $: {
    if (gameOver) clearInterval(gameInterval);
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(${width}, ${gridSize}px);
    grid-template-rows: repeat(${height}, ${gridSize}px);
    width: ${width * gridSize}px;
    height: ${height * gridSize}px;
    border: 1px solid #ccc;
  }

  .cell {
    width: ${gridSize}px;
    height: ${gridSize}px;
    background-color: #eee;
    border: 1px solid #fff;
  }

  .snake {
    background-color: #333;
  }

  .food {
    background-color: #f00;
  }
</style>

<div>
  {#if !gameOver}
    <div class="grid" tabindex="0" on:keydown={handleKeydown}>
      {#each Array.from({ length: height * width }) as _, i}
        <div
          class="cell {snake.find(s => s.x === i % ${width} && s.y === Math.floor(i / ${width})) ? 'snake' : ''} {food.x === i % ${width} && food.y === Math.floor(i / ${width}) ? 'food' : ''}"
        ></div>
      {/each}
    </div>
  {:else}
    <p>Game Over!</p>
  {/if}
</div>

