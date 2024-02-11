// TODO: write your code here
import sum from './basic';
import Game from './game.js';
// import {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';


export function healthIndicator(value){
    if(value.health > 50){
        return 'healthy';
    } else if(value.health >= 15 && value.health <= 50){
        return 'wounded';
    } else if(value.health < 15){
        return 'critical';
    }
}

export default function sortHeroes(list) {

    for (let i = 0; i < list.length - 1; i += 1) {
        if (
          list[i].name === undefined
          || list[i].health === undefined
          || typeof list[i].health === 'string'
        ) return null;
      }

    return list.sort((a, b) => b.health - a.health);
}

console.log('worked');

console.log(sum([1, 2]));

const game = new Game();
game.start();