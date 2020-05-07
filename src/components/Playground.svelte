<script>
  import Counter from './Counter.svelte';
  import PlayersLoop from './PlayersLoop.svelte';

</script>


<div class="playground">
  <PlayersLoop />
  <Counter on:bomb />
</div>

<style>
  .playground {
    width: 100%;
  }
</style>