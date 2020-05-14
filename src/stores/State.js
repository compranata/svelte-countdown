import { writable, derived } from 'svelte/store';

const Members = writable([
  { id: 123, name: 'Yoshi' },
  { id: 124, name: 'Mario' },
  { id: 125, name: 'Luigi' },
]);

const Players = derived(
  Members,
  $Members => {
    return $Members.length;
  }
)
const Config = writable({
  initCount: 3,
  loop: true,
  live: false
});



export { Members, Config, Players };