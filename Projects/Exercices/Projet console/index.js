import readlineSync from 'readline-sync'
import { startGame } from './game.js'

console.log('🚴 PhromulaOne - Le Jeu ! 🚴');
console.log('Utilise les flèches gauche/droite pour éviter les obstacles.');
if (readlineSync.keyIn('Appuie sur une touche pour commencer !')) {
    startGame()
}