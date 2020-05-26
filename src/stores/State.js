import { writable, derived } from 'svelte/store';

const Members = writable([
  { name: 'Yoshi', id: 101, active: true },
  { name: 'Mario', id: 102, active: true },
  { name: 'Luigi', id: 103, active: true },
]);

const Users = derived(
  Members,
  $Members => {
    return $Members.length;
  }
);
const Players = derived(
  Members,
  $Members => {
    return $Members.filter(member => member.active);
  }
);
const Config = writable({
  initCount: 3,
  loop: true,
  live: false
});

export { Members, Config, Players, Users };