<script>
  let gridSize = 20; // Size of each grid cell
  let numRows = 15;  // Number of rows
  let numCols = 15;  // Number of columns

  let snake = [{ x: 5, y: 5 }]; // Initial snake position
  let food = { x: 10, y: 10 };  // Initial food position

  let direction = "right"; // Initial direction

  // Function to update the game state
  function update() {
    // Move the snake based on the current direction
    let newHead = { ...snake[0] };
    if (direction === "up") newHead.y -= 1;
    if (direction === "down") newHead.y += 1;
    if (direction === "left") newHead.x -= 1;
    if (direction === "right") newHead.x += 1;

    // Check for collisions with walls or self
    if (
      newHead.x < 0 ||
      newHead.x >= numCols ||
      newHead.y < 0 ||
      newHead.y >= numRows ||
      snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)
    ) {
      alert("Game Over!");
      snake = [{ x: 5, y: 5 }];
      return;
    }

    // Check for collision with food
    if (newHead.x === food.x && newHead.y === food.y) {
      // Increase snake length and respawn food
      snake.unshift(food);
      generateFood();
    } else {
      // Move the snake by adding a new head and removing the tail
      snake.unshift(newHead);
      snake.pop();
    }
  }

  // Function to generate random food position
  function generateFood() {
    food = {
      x: Math.floor(Math.random() * numCols),
      y: Math.floor(Math.random() * numRows),
    };
  }

  // Event listener for keyboard input to change direction
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    if (event.key === "ArrowDown" && direction !== "up") direction = "down";
    if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (event.key === "ArrowRight" && direction !== "left") direction = "right";
  });

  // Initialize the game
  generateFood();
  let gameInterval = setInterval(update, 200); // Update the game every 200 milliseconds

  // Cleanup function to stop the game interval when the component is destroyed
  onDestroy(() => {
    clearInterval(gameInterval);
  });
</script>

<div class="grid">
  {#each Array(numRows) as _, row}
    {#each Array(numCols) as _, col}
      <div
        class="cell {snake.some(segment => segment.x === col && segment.y === row) ? 'snake' : ''} {food.x === col && food.y === row ? 'food' : ''}"
      ></div>
    {/each}
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(${numCols}, ${gridSize}px);
    grid-template-rows: repeat(${numRows}, ${gridSize}px);
    width: ${gridSize * numCols}px;
    height: ${gridSize * numRows}px;
    border: 1px solid #000;
  }

  .cell {
    width: ${gridSize - 2}px;
    height: ${gridSize - 2}px;
    background-color: #ccc;
  }

  .snake {
    background-color: #00f;
  }

  .food {
    background-color: #f00;
  }
</style>
