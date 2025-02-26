import { render } from "./render.js"
import { moveObstacles } from "./obstacles.js"
import { ground } from "./models.js"
import { removeLife, addScore } from "./score.js"
import { isPlayerDead, movePlayer } from "./player.js"
import keypress from 'keypress';

export function startGame() {
    let score = { life: 5, score: 0 }
    let playerPosition = 12
    let obstaclesPositions = []
    
    process.stdin.setRawMode(true);
    process.stdin.resume()
    keypress(process.stdin)

    gameLoop(score, playerPosition, obstaclesPositions)
    
    console.log('end')
}

function gameLoop(score, playerPosition, obstaclesPositions) {
    let lastInput = { name: null };
    process.stdin.on('keypress', function(ch, key) {
        lastInput = key;
    });

    const intervalId = setInterval(() => {
        obstaclesPositions = moveObstacles(obstaclesPositions);

        if (isPlayerDead(playerPosition, obstaclesPositions, ground.length - 1)) {
            score = removeLife(score);
        }

        score = addScore(score, 1);

        console.clear();
        console.log(render(playerPosition, obstaclesPositions, score));

        if (score.life <= 0) {
            clearInterval(intervalId);
            clearInterval(intervalIdKey);
            console.log('Game Over');
        }
    }, 100);

    const intervalIdKey = setInterval(() => {
        if (lastInput.name === 'd') {
            playerPosition = movePlayer('d', playerPosition, ground[1].length - 2);
            lastInput = { name: null };
        } else if (lastInput.name === 'q') {
            playerPosition = movePlayer('q', playerPosition, ground[1].length - 2);
            lastInput = { name: null };
        }
    }, 100);
}