<script>
  import { createEventDispatcher } from 'svelte';
  import Button from '../../shared/Button.svelte';
  import { Players, Config } from '../../stores/State.js';
  
  const dispatch = createEventDispatcher();

  export let currentPlayerId;

  let counter = $Config.initCount;
  let timeInterval = null;
  let isPaused = false;
  let isRunning = false;

  $: initCount = $Config.initCount;
  $: totalPlayers = $Players.length;
  $: {
    $Config.live = !!timeInterval;
  }

  const timer = () => {
    counter--;
    if (counter < 1) {
      clearTimer();
      isRunning = false;
      dispatch('bomb');
    }
  };

  const setTimer = () => {
    timeInterval = setInterval(timer, 1000);
    isRunning = true;
  };

  const clearTimer = () => {
    clearInterval(timeInterval);
    timeInterval = null;
  }

  const resetState = () => {
    const isTerminated = currentPlayerId === totalPlayers -1 && !$Config.loop;
    if (isTerminated) {
      isRunning = false;
      return false;
    } else {
      return true;
    }
  }

  const moveNextPlayer = () => {
    clearTimer();
    dispatch('next');
  };

  const handleStart = e => {
    if (isPaused) return;
    counter = initCount;
    timeInterval && moveNextPlayer();
    resetState() && setTimer();
  };

  const handlePause = e => {
    isPaused ? setTimer() : clearTimer();
    isPaused = !isPaused;
  };

</script>

<div class="counter" disabled={isPaused} on:click={handleStart}>
  <span class="digits glow">{counter}</span>
  <span class="ready glow" class:show={!isRunning}>Ready, steady...</span>
</div>
<div class="controller">
  <Button type="secondary" disabled={isPaused} on:click={handleStart}>{isRunning ? 'Next' : 'Start'}</Button>
  <Button type="primary" disabled={!isRunning} on:click={handlePause}>{isPaused ? 'Resume' : 'Pause'}</Button>
</div>

<style>
  .counter {
    font-family: 'Orbitron', sans-serif;
    font-size: 15em;
    text-align: center;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin: 20px auto;
    color: #888;
    max-width: 300px;
    position: relative;
  }
  .ready {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: .3em;
  }
  .show {
    display: block;
  }
  .controller {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .glow {
    color: #fff;
    text-align: center;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #333, 0 0 40px #333, 0 0 50px #333, 0 0 60px #333, 0 0 70px #333;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #888, 0 0 40px #888, 0 0 50px #888, 0 0 60px #888, 0 0 70px #888, 0 0 80px #888;
    }
  }
</style>
