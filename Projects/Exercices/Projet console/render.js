import { ground } from "./models.js"

export const render = (playerPosition=10, obstaclesPositions, score) => {
    let currentGround = ground.map(row => [...row])
    
    currentGround[currentGround.length-1].splice(playerPosition, 1, '🚴')
    let renderedBoard = ''
    for (let i = 0; i < currentGround.length; i++) {
        renderedBoard += currentGround[i].join('')
    }

    return renderedBoard
}