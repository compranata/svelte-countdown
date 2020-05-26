<script>
  import Card from '../../shared/Card.svelte';
  import Button from '../../shared/Button.svelte';
  import { Members } from '../../stores/State.js';

  export let member;

  const handleDelete = id => {
    Members.update(players => {
      return players.filter(player => player.id !== id);
    });
  };

  const handlePause = id => {
    Members.update(players => {
      let current = [...players];
      const target = players.filter(player => player.id === id);
      target[0].active = !target[0].active;
      return current;
    })
  }
</script>

<Card active={member.active}>
  <div class="member" >
    <div class="name">
      <h3>{member.name}</h3>
    </div>
    <div class="control">
      <Button 
        type="dimmed { member.active ? 'grey' : 'secondary'}"
        tiny={true}
        flat={true}
        title={ member.active ? 'Pause' : 'Rejoin'}
        on:click={() => handlePause(member.id)}
      >
        { member.active ? 'II' : '▶︎'}
      </Button>
      <Button 
        type="dimmed primary"
        tiny={true}
        flat={true}
        title="Delete"
        on:click={() => handleDelete(member.id)}
      >
        X
      </Button>
    </div>
  </div>
</Card>

<style>
  .member {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .control {
    white-space: nowrap;
  }
  h3 {
    margin: 0 auto;
    color: #555;
  }
</style>