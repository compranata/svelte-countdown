<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Modal from './shared/Modal.svelte';
	import Members from './components/Members/index.svelte';
	import Playground from './components/Playground/index.svelte';
	import Settings from './components/Setup/index.svelte';
	import Tabs from './shared/Tabs.svelte';
	import { Config } from './stores/State.js';

	// tabs
	let items = ['Play', 'Rules', 'Members'];
	let activeItem = 'Members';
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

<Modal {showModal} isDark={true} on:click={toggleModal}>
	<h3>You suck</h3>
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
		margin: 20px auto;
  }
</style>
