<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Members from './components/Members.svelte';
	import Playground from './components/Playground.svelte';
	import Tabs from './shared/Tabs.svelte';


	export let title;
	
	// tabs
	let items = ['Play', 'Members'];
	let activeItem = 'Members';
	const tabChange = (e) => activeItem = e.detail;


</script>

<Header>{title}</Header>
	<main>
		<Tabs {activeItem} {items} on:tabChange={tabChange} />
		{#if activeItem === 'Play'}
			<Playground />
		{:else}
			<Members />
		{/if}
	</main>
<Footer></Footer>

<style>
  main {
    max-width: 420px;
		margin: 40px auto;
  }
</style>
