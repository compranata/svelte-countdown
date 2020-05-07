<script>
  export let type = 'primary';
  export let tiny = false;
  export let flat = false;
  export let inverse = false;
</script>

<button class:flat={flat} class:inverse={inverse} class:tiny={tiny} class={type} on:click>
  <slot></slot>
</button>

<style>
  button{
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    opacity: .8;
  }
  button:hover {
    opacity: 1;
  }

  .tiny {
    padding: 4px 6px;
    font-size: .8em;
  }
  .flat {
    box-shadow: none;
  }
  .primary {
    background: #d91b42;
    color: white;
  }
  .secondary {
    background: #45c496;
    color: white;
  }
  .dimmed {
    background: #888;
    color: #ddd;
    opacity: .2;
  }
  .dimmed:hover {
    opacity: 1;
  }
  .primary.inverse {
    color: #d91b42;
    background: white;
    border: 2px solid #d91b42;
  }
  .secondary.inverse {
    color: #45c496;
    background: white;
    border: 2px solid #45c496;
  }
  .dimmed.inverse {
    color: #888;
    background: #ddd;
    border: 2px solid #888;
  }

</style>
