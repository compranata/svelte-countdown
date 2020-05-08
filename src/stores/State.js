import { writable, derived } from 'svelte/store';

const Members = writable([
  { id: 123, name: 'Yoshi', active: true },
  { id: 124, name: 'Mario', active: false },
  { id: 125, name: 'Luigi', active: false },
]);

const Players = derived(
  Members,
  $Members => {
    return $Members.length;
  }
)
const Config = writable({
  initCount: 5,
  loop: true,
  live: false
});



export { Members, Config, Players };