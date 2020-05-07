import { writable, readable } from 'svelte/store';

const Members = writable([
  { id: 123, name: 'Yoshi', active: true },
  { id: 124, name: 'Mario', active: false },
  { id: 125, name: 'Luigi', active: false },
  { id: 126, name: 'Bowser', active: false },
  { id: 127, name: 'Peach', active: false },
  { id: 128, name: 'Daisy', active: false },
  { id: 129, name: 'Todd', active: false },
  { id: 122, name: 'Wario', active: false },
  { id: 121, name: 'Waluigi', active: false },
  { id: 120, name: 'Svelta', active: false },
]);

const Config = writable({
  initCount: 5
});

let count = 5;
const Counter = readable(count, function start(set) {
  const interval = setInterval(() => {
    count--;
    set(count);
    if (count < 1) {
      clearInterval(interval);
    }
  }, 1000);

  return function stop() {
    clearInterval(interval);
  }
});

export { Members, Config };