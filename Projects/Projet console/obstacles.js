import { obstacles, ground } from "./models.js";

function generateObstacles(spawnProbability = 0.05) {
    /* 
    Generate obstables on the highest row of the ground
    @param {Number} spawnProbability
    @return {Array} Array of obstacles objects
    */
    const newObstacles = []
    for (let i = 1; i < ground[1].length - 1; i++) {
        if (Math.random() > 1 - spawnProbability) {
            newObstacles.push({x: i, y: 1, type: Math.floor(Math.random() * obstacles.length)})
        }
    }
    return newObstacles
}

export function moveObstacles(previousObstacles) {
    /*
    Move obstacles down the ground, remove obstacles that reach the last row, and add new obstacles on the highest row
    @param {Array} previousObstacles
    @return {Array} new obstacles
    */
    const newObstacles = []
    for (let i = 0; i < previousObstacles.length; i++) {
        const { x, y, type } = previousObstacles[i]
        if (y < ground.length - 1) {
            newObstacles.push({ x, y: y + 1, type })
        }
    }
    return [...newObstacles, ...generateObstacles()]
}