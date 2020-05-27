<script>
  import { fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import MemberDetails from './Details.svelte';
  import { Members } from '../../stores/State';

  $: {
    console.dir($Members);
  }
</script>

<div class="member-list">
  {#each $Members as member (member.id)}
    <div in:fade out:scale|local animate:flip={{duration: 500}}>
      <MemberDetails {member} />
    </div>
  {/each}
</div>

<style>
  .member-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
</style>
