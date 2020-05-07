<script>
  import { createEventDispatcher } from 'svelte';
  import Button from '../shared/Button.svelte';
  import { Config } from '../stores/State.js';
  import Timer from '../stores/Timer.js';

  let buttonStart = 'Start';
  let counter = 5;

  $: initCount = $Config.initCount;

  const dispatch = createEventDispatcher();

  let timeInterval = null;
  let isPaused = false;
  let isRunning = false;

  const timer = () => {
    counter--;
    if (counter < 1) {
      clearInterval(timeInterval);
      isRunning = false;
      buttonStart = 'Start';
      dispatch('bomb');
    }
  };

  const moveNextPlayer = () => {
    clearInterval(timeInterval);
    counter = initCount;
    timeInterval = null;
  };

  const handleStart = e => {
    if (isPaused) return;
    timeInterval && moveNextPlayer();
    timeInterval = setInterval(timer, 1000);
    isRunning = true;
    buttonStart = 'Next';
  };

  const handlePause = e => {
    if (!isRunning) return;
    if (isPaused) {
      isPaused = false;
      timeInterval = setInterval(timer, 1000);
    } else {
      isPaused = true;
      clearInterval(timeInterval);
      timeInterval = null;
    }
  };

</script>

<div class="counter">
  <span class="digits" on:click={handleStart}>{counter}</span>
</div>
<div class="controller">
  <Button type="secondary" on:click={handleStart}>{buttonStart}</Button>
  <Button type="primary" on:click={handlePause}>{isPaused ? 'Resume' : 'Pause'}</Button>
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
  }
  .controller {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
