<script>
  import { createEventDispatcher } from 'svelte';
  import { Members } from '../stores/State';

  let dispatch = createEventDispatcher();
  
  export let items;
  export let activeItem;

  $: count = $Members.length;
  $: disabled = count < 1;

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
            <span class="badge">{count}</span>
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
  li{
    margin: 0 16px;
    font-size: 16px;
    color: #555;
    cursor: pointer;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
  .disabled {
    pointer-events: none;
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
    transform: translateY(-25%);
  }
  .active .badge {
    color: white;
    background: #d91b42;
    opacity: .5;
  }

</style>