<script>
  import { createEventDispatcher } from 'svelte';
  import { Users, Players, Config } from '../stores/State';

  let dispatch = createEventDispatcher();
  
  export let items;
  export let activeItem;

  $: isLive = $Config.live;
  $: disabled = $Players < 1 || isLive;

  const handleClick = item => {
    if (disabled) return;
    dispatch('tabChange', item);
  };

</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => handleClick(item)}>
        <div class="wrapper" class:active={item === activeItem} class:disabled={disabled}>
          { item }
          {#if item === 'Members'}
            <span class="badge">{$Users}</span>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs{
    margin-bottom: 40px;
  }
  ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li .wrapper{
    margin: 0 16px;
    font-size: 16px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: #d91b42;
    border-bottom: 4px solid #d91b42;
    padding-bottom: 4px;
  }
  .disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: .6;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .badge {
    display: inline-block;
    min-width: 1em;
    padding: .4em;
    border-radius: 50%;
    font-size: 10px;
    text-align: center;
    background: #ddd;
    color: #888;
    transform: translate(20%, -25%);
    opacity: .5;
  }
  .active .badge {
    color: white;
    background: #d91b42;
    opacity: 1;
  }

</style>