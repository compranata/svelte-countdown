<script>
  import Counter from './Counter.svelte';
  import PlayersLoop from './PlayersLoop.svelte';
  import { Players, Config } from '../stores/State.js';

  let currentPlayerId = 0;
  $: totalPlayers = $Players;

  const moveNextPlayer = () => {
    if (currentPlayerId === totalPlayers - 1) {
      currentPlayerId = 0;
    } else {
      currentPlayerId++;
    }
  };
</script>


<div class="playground">
  <PlayersLoop {currentPlayerId} />
  <Counter on:bomb on:next={moveNextPlayer} />
</div>

<style>
  .playground {
    width: 100%;
  }
</style>