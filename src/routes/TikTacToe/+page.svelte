<!-- src/TicTacToe.svelte -->


<head>
  <title>Tic-Tac-Toe Game - Everyday Web Things</title>
  <meta name="description" content="Enjoy the classic game of Tic-Tac-Toe online. Play against friends or challenge the computer to a game of strategy and wits." />
  <meta name="keywords" content="Tic-Tac-Toe game, online Tic-Tac-Toe, strategy game, two-player game, classic board game" />
</head>



<script>

import GoogleAds from '../../components/GoogleAds.svelte';

  let board = Array(9).fill('');
  let xIsNext = true;
  let winner = null;

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        winner = board[a];
        return;
      }
    }
    
    if (!board.includes('')) {
      winner = 'Draw';
    }
  }

  function handleClick(i) {
    if (board[i] || winner) return;
    board[i] = xIsNext ? 'X' : 'O';
    xIsNext = !xIsNext;
    calculateWinner();
  }
  
  function resetGame() {
    board = Array(9).fill('');
    xIsNext = true;
    winner = null;
  }
</script>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 5px;
    width: 310px;
    margin: 0 auto;
  }

  .square {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    font-size: 24px;
    font-weight: bold;
    background-color: #f0f0f0;
    cursor: pointer;
  }

  .winner {
    background-color: #6aff6a;
  }

  .status {
    text-align: center;
    font-size: 24px;
    margin: 20px 0;
  }

  .reset-button {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  .reset-button:hover {
    background-color: #0056b3;
  }
</style>

<div>
  <h2>Tic-Tac-Toe</h2>
  <div class="status">
    {#if winner}
      {#if winner === 'Draw'}
        It's a {winner}!
      {:else}
        Winner: {winner}
      {/if}
    {:else}
      Next player: {xIsNext ? 'X' : 'O'}
    {/if}
  </div>
  <div class="board">
    {#each board as square, i}
      <div class="square {winner && winner === square ? 'winner' : ''}" on:click={() => handleClick(i)}>
        {square}
      </div>
    {/each}
  </div>
  <button class="reset-button" on:click={resetGame}>Restart Game</button>
</div>
