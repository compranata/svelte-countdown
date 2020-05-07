<script>
  import { Members } from '../stores/State';
</script>

<div class="playersloop">
  <ul>
    {#each $Members as member (member.id)}
      <li class:active={member.active}>{member.name}</li>
    {/each}
  </ul>
</div>
<style>
  .playersloop {
    overflow: hidden;
  }
  ul{
    /* display: flex;
    justify-content: center;
    align-items: center; */
    padding: 0;
    list-style-type: none;

    overflow-x: auto;
    white-space: nowrap;
  }
  li{
    margin: 0 16px;
    font-size: 18px;
    color: #ccc;

    display: inline-block;
    width: 30%;
  }
  li.active {
    font-size: 2em;
    color: #666;
  }

</style>
