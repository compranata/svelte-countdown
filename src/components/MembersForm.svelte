<script>
  import Button from '../shared/Button.svelte';
  import { Members } from '../stores/State';

  let fields = { name: '' };
  let errors = { name: '' };
  let valid = false;

  const submitHandler = () => {
    valid = true;
    const existingName = $Members.map(member => member.name.toLowerCase());
    const isExist = existingName.some(member => fields.name.trim().toLowerCase() === member);
    console.log(isExist, existingName);
    

    if (fields.name.trim().length < 3) {
      valid = false;
      errors.name = 'Name must be at least 3 chars long.';
    } else if (isExist) {
      valid = false;
      errors.name = `'${ fields.name.trim()}' is already existing.`;
    } else {
      errors.name = '';
    }

    if (valid) {
      let member = {...fields, id: Math.random(), active: false };
      Members.update(currentMembers => {
        return [member, ...currentMembers];
      });
      fields = { name: '' };
    }
  };
  

</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <input type="text" id="name" placeholder="add new member name" bind:value={fields.name}>
    <div class="error">{errors.name}</div>
  </div>
  <Button type="secondary" flat="true">Add</Button>
</form>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label{
    margin: 10px auto;
    text-align: left;
  }
  .error{
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
