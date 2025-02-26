import { ground, obstacles, player } from "./models.js"

export const render = (playerPosition, obstaclesPositions, score) => {
    let currentGround = ground.map(row => [...row])
    
    // Place player
    currentGround[currentGround.length-1].splice(playerPosition, 1, player)

    // Place obstacles
    for (let i = 0; i < obstaclesPositions.length; i++) {
        const { x, y, type } = obstaclesPositions[i]
        currentGround[y].splice(x, 1, obstacles[type])
    }

    // Display score
    for (let i = 0; i < score.life; i++) {
        currentGround[1].splice(2 + i, 1, '❤️ ')
    }
    for (let i = 0; i < score.score.toString().length; i++) {
        currentGround[1].splice(24 - i, 1, score.score.toString()[score.score.toString().length - 1 - i] + ' ')
    }

    // Array to string
    let renderedBoard = ''
    for (let i = 0; i < currentGround.length; i++) {
        renderedBoard += currentGround[i].join('')
    }

    return renderedBoard
}