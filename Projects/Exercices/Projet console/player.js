export function isPlayerDead(playerPosition, obstaclesPositions, boardLastRowNumber) {
    /*
    Check if the player is in the same position as an obstacle
    @param {Number} playerPosition
    @param {Array} obstaclesPositions
    @return {Boolean}
    */
    for (let obstacle of obstaclesPositions) {
        if (obstacle.y === boardLastRowNumber && obstacle.x === playerPosition) {
            return true
        }
    }
    return false
}

export function movePlayer(input, playerPosition, boardRowLength) {
    if (input === 'q' && playerPosition - 1 > 0) { 
        playerPosition--
    }
    else if (input === 'd' && playerPosition + 1 < boardRowLength - 2) {
        playerPosition++
    }
    return playerPosition
}