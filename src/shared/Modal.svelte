<script>
  export let showModal = false;
  export let isDark = false;
</script>

{#if showModal}
  <div class="backdrop" class:dark={isDark}>
    <div class="modal">
      <div class="close" on:click|self></div>
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(124,0,0,0.8);
    z-index: 9999;
  }
  .modal{
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: white;
  }
  .dark .modal{
    background: black;
    color: white;
  }
  .close:after {
    content: 'X';
    display: inline-block;
    font-size: 26px;
    font-weight: bolder;
    color: #888;
    border-radius: 50%;
    border: 4px solid #888;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -18px;
    right: -18px;
  }
</style>
