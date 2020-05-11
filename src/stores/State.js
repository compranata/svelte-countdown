import { writable, derived } from 'svelte/store';

const Members = writable([
  { id: 123, name: 'Samurai', active: true },
  { id: 124, name: 'Ninja', active: false },
  { id: 125, name: 'Shogun', active: false },
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