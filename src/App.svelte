<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Modal from './shared/Modal.svelte';
	import Members from './components/Members.svelte';
	import Playground from './components/Playground.svelte';
	import Tabs from './shared/Tabs.svelte';

	export let title;
	
	// tabs
	let items = ['Play', 'Members'];
	let activeItem = 'Play';
	const tabChange = (e) => activeItem = e.detail;

	// modal
	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	}

</script>

<Modal {showModal} on:click={toggleModal}>
	Boo
</Modal>
<Header>{title}</Header>
	<main>
		<Tabs {activeItem} {items} on:tabChange={tabChange} />
		{#if activeItem === 'Play'}
			<Playground on:bomb="{toggleModal}" />
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
