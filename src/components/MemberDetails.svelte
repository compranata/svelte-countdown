<script>
  import Card from '../shared/Card.svelte';
  import Button from '../shared/Button.svelte';
  import { Members } from '../stores/State.js';

  export let member;

  const handleDelete = id => {
    Members.update(polls => {
      return polls.filter(poll => poll.id != id);
    });
  };
</script>

<Card>
  <div class="member">
    <h3>{member.name}</h3>
    <span class="delete">
      <Button type="dimmed" tiny={true} flat={true} on:click={() => handleDelete(member.id)}>X</Button>
    </span>
  </div>
  <div class="delete">
    
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .member {
    position: relative;
  }
  .answer{
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover{
    opacity: 0.6;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
  }
  .percent{
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a{
    background: rgba(217,27,66,0.2);
    border-left: 4px solid #d91b42;
  }
  .percent-b{
    background: rgba(69,196,150,0.2);
    border-left: 4px solid #45c496;
  }
  .delete{
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%) translateY(4px);
  }
</style>