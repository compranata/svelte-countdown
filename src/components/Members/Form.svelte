<script>
  import Button from '../../shared/Button.svelte';
  import { Members } from '../../stores/State';

  let fields = { name: '', order: 1};
  let errors = { name: '' };
  let valid = false;

  const trimString = value => {
    console.log(typeof value, value);
    
    return (typeof value === 'string') ? value.trim() : value;
  }

  const submitHandler = () => {
    valid = true;
    const existingName = $Members.map(member => member.name.toLowerCase());
    const isExist = existingName.includes(fields.name.trim().toLowerCase());
    
    if (fields.name.trim().length < 3) {
      valid = false;
      errors.name = 'Name must be at least 3 chars long.';
    } else if (isExist) {
      valid = false;
      errors.name = `' ${ fields.name.trim()} ' is already existing.`;
    } else {
      errors.name = '';
    }

    if (valid) {
      for (let key in fields) {
        fields[key] = trimString(fields[key]);
      }
      let member = {...fields, id: Math.floor(Math.random() * 1000), active: true };
      Members.update(currentMembers => {
        return [member, ...currentMembers];
      });
      fields = { name: '' };
    }
  };
  

</script>

<form name="members" on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <input type="text" id="name" placeholder="add new member name" bind:value={fields.name}>
    <Button type="secondary" flat="true">Add</Button>
  </div>
  <div class="error">{errors.name}</div>
</form>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    display: flex;
    margin: 18px auto 0;
  }
  input {
    width: 100%;
    border-radius: 6px;
    margin-right: 18px;
  }
  .error{
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
    margin-bottom: 18px;
  }
</style>
