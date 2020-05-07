<script>
  import Button from '../shared/Button.svelte';

</script>

<div class="playground">
  <div class="controller">
    <Button type="secondary">Start</Button>
    <Button type="primary">Pause</Button>
  </div>
  
</div>

<style>
  .playground {
    width: 100%;
  }
  .controller {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>