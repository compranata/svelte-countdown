<script>
  import Counter from './Counter.svelte';
  import PlayersLoop from './Players.svelte';
  import { Players, Config } from '../../stores/State.js';

  let currentPlayerId = 0;
  let isTerminate = false;

  $: totalPlayers = $Players;

  const moveNextPlayer = () => {
    if (currentPlayerId === totalPlayers - 1) {
      currentPlayerId = 0;
      isTerminate = $Config.loop;
      console.log('isTerminate', isTerminate);
      
    } else {
      currentPlayerId++;
    }
  };
</script>


<div class="playground">
  <PlayersLoop {currentPlayerId} />
  <Counter on:bomb on:next={moveNextPlayer} {isTerminate} />
</div>

<style>
  .playground {
    width: 100%;
  }
</style>