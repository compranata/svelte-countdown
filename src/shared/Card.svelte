<script>
  export let active = true;

</script>

<div class="card" class:active>
  <slot></slot>
</div>

<style>
  .card {
    background: #fff;
    padding: 20px;
    border-radius: 0 6px 6px 0;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
    border-left: 4px solid #d91b42;
    max-width: 360px;
    margin: 0 auto;
  }
  .active {
    border-left: 4px solid #45c496;
  }
  .card:hover {
    /* transform: scaleX(1.1); */
    box-shadow: 1px 4px 8px rgba(0,0,0,0.4);
    transition: .2s ease-in-out;
  }
</style>