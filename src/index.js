//import './css/style.css';

//import './js/app';

// TODO: write your code in app.js

import sortHeroes from './js/app';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

console.log(sortHeroes(heroes));