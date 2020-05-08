<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Modal from './shared/Modal.svelte';
	import Members from './components/Members.svelte';
	import Playground from './components/Playground.svelte';
	import Settings from './components/Settings.svelte';
	import Tabs from './shared/Tabs.svelte';
	import { Config } from './stores/State.js';

	// tabs
	let items = ['Play', 'Rules', 'Members'];
	let activeItem = 'Play';
  $: isLive = $Config.live;
	const tabChange = (e) => {
		if (!isLive) activeItem = e.detail;
	}

	// modal
	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	}
</script>

<Modal {showModal} on:click={toggleModal}>
	<iframe src="https://giphy.com/embed/cEYFeE1QgHWH2YADVHG" width="384" height="204" frameBorder="0" title="You suck!" class="giphy-embed" allowFullScreen></iframe>
</Modal>
<Header></Header>
	<main>
		<Tabs {activeItem} {items} on:tabChange="{tabChange}" />
		{#if activeItem === 'Play'}
			<Playground on:bomb="{toggleModal}" />
		{:else if activeItem === 'Rules'}
			<Settings />
		{:else}
			<Members />
		{/if}
	</main>
<Footer></Footer>

<style>
  main {
		position: relative;
    max-width: 420px;
		margin: 40px auto;
  }
</style>
