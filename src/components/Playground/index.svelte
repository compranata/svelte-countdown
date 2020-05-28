<script>
  import { createEventDispatcher } from 'svelte';
  import Counter from './Counter.svelte';
  import PlayersLoop from './Players.svelte';
  import { Players, Config } from '../../stores/State.js';

  const dispatch = createEventDispatcher();

  let currentPlayerId = 0;

  $: totalPlayers = $Players.length;
  $: isLastPlayer = currentPlayerId === totalPlayers - 1;

  const moveNextPlayer = () => {
    currentPlayerId = (isLastPlayer) ? 0 : currentPlayerId + 1;
  };
</script>


<div class="playground">
  <PlayersLoop {currentPlayerId} />
  <Counter on:next={moveNextPlayer} on:bomb {currentPlayerId}} />
</div>

<style>
  .playground {
    width: 100%;
  }
</style>