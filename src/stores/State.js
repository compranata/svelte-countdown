import { writable } from 'svelte/store';

const Members = writable([
  { id: 123, name: 'Yoshi', active: false },
  { id: 124, name: 'Mario', active: false },
  { id: 125, name: 'Luigi', active: false },
  { id: 126, name: 'Boser', active: false }
]);

const Config = writable([]);

export { Members };