<script>
  import { fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { Players } from '../../stores/State';

  export let currentPlayerId = 0;

  $: posList = -(21 * currentPlayerId);
</script>

<div class="playersloop">
  <ul class="looping" style="top: {posList}px">
    {#each $Players as member, index (member.id)}
      {#if (member.active)}
        <li class:active={index === currentPlayerId}>{member.name}</li>
      {/if}
    {/each}
  </ul>
</div>
<style>
  .playersloop {
    height: 7em;
    overflow: hidden;
    position: relative;
  }
  .playersloop:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,.7) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,.7) 100%);
    z-index: 99;
  }
  ul {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style-type: none;
    margin: 20px auto;
  }
  li {
    position: relative;
    margin: 0 16px;
    font-size: 18px;
    color: #ccc;
    width: 300px;
    text-align: center;
  }
  li.active {
    font-size: 36px;
    color: #666;
    border: 2px solid #ccc;
  }

  li.active:before {
    position: absolute;
    content: '😱 ';
    left: -18px;
  }
  li.active:after {
    position: absolute;
    content: '😱 ';
    right: -18px;
  }

</style>
