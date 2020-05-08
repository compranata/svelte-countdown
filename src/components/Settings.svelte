<script>
  import Button from '../shared/Button.svelte';
  import { Config } from '../stores/State.js';

  let fields = { initCount: $Config.initCount, loop: $Config.loop };
  let errors = { initCount: '' };
  let valid = false;

  const submitHandler = () => {
    valid = true;

    if (isNaN(fields.initCount)) {
      valid = false;
      errors.initCount = 'Initial Seconds must be a number.';
    } else {
      errors.initCount = '';
    }

    if (valid) {
      Config.update(currentConfig => {
        return {...fields, live: false };
      });
    }
  }

</script>

<form name="config" on:submit|preventDefault={submitHandler}>
  
  <div class="form-field">
    <label for="sec">Initial seconds:</label>
    <input type="number" id="sec" placeholder="Set an initial count" bind:value={fields.initCount} />
  </div>
  <div class="error">{errors.initCount}</div>
  <div class="form-field">
    <label for="seamless">Seamless loop:</label>
    <input type="checkbox" id="seamless" bind:checked={fields.loop} />
  </div>
  <div class="form-ctrl">
    <Button type="secondary" flat="true">Save</Button>
  </div>
</form>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    color: #555;
  }
  .form-field {
    display: flex;
    margin: 18px auto 0;
    align-items: center;
  }
  .form-ctrl {
    margin: 18px auto 0;
    text-align: right;
  }
  input {
    width: 50%;
    border-radius: 6px;
    margin-right: 18px;
  }
  label{
    margin: 10px auto;
    text-align: left;
  }
  .error{
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
    margin-bottom: 18px;
  }
</style>
