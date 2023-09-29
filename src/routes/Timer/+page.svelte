<!-- src/Timer.svelte -->

<head>
  <title>Timer - Everyday Web Things</title>
  <meta name="description" content="Set countdown timers for various tasks and activities with our online timer. Stay organized and be alerted when your time is up." />
  <meta name="keywords" content="timer, countdown timer, online timer, time management, task timer" />
</head>



<script>
  let seconds = 0;
  let isRunning = false;
  let interval;

  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      interval = setInterval(() => {
        seconds++;
      }, 1000);
    }
  }

  function stopTimer() {
    if (isRunning) {
      isRunning = false;
      clearInterval(interval);
    }
  }

  function resetTimer() {
    seconds = 0;
    isRunning = false;
    clearInterval(interval);
  }
</script>

<style>
  /* Add your CSS styles here */
</style>

<div>
  <h2>Timer</h2>
  <p>Seconds: {seconds}</p>
  <button on:click={startTimer} disabled={isRunning}>Start</button>
  <button on:click={stopTimer} disabled={!isRunning}>Stop</button>
  <button on:click={resetTimer}>Reset</button>
</div>






