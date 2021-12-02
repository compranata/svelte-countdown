<script>
  import Counter from './Counter.svelte';
  import PlayersLoop from './Players.svelte';
  import { Players, Config } from '../../stores/State.js';

  let currentPlayerId = 0;
  let isTerminate = false;

  $: totalPlayers = $Players.length;

  const moveNextPlayer = () => {
    const isLastPlayer = currentPlayerId === totalPlayers - 1;

    if (isLastPlayer) {
      isTerminate = !$Config.loop;
      currentPlayerId = 0
    } else {
      currentPlayerId++;
    }
  };
</script>


<div class="playground">
  <PlayersLoop {currentPlayerId} />
  <Counter on:bomb on:next={moveNextPlayer} {currentPlayerId} />
</div>

<style>
  .playground {
    width: 100%;
  }
</style>