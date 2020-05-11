<script>
  import { onMount } from 'svelte';

  let title;

  onMount(() => {
    title = document.getElementsByTagName('title')[0].textContent;
    
  });
</script>

<header>
  <div class="container">
    <img class="logo" src="images/logo.png" alt="古今東西" />
    <div class="subtitle">{title}</div>
  </div>
</header>

<style>
  header {
    height: 100px;
    background-color: #f7f7f7;
  }
  .container {
    display: flex;
    max-width: 420px;
    padding: 0 10px;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
  }
  .subtitle {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
    font-weight: bolder;
    text-align: right;
    margin-left: 10px;
    color: #666;
    height: 100%;
  }
  .logo {
    width: 100px;
    height: 100px;
  }
</style>