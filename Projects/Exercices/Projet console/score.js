export function removeLife(score) {
    /*
    Remove one life from the score
    @param {Object} score
    @return {Object}
    */
    return { ...score, life: score.life - 1 }
}

export function addScore(currentScore, bonus) {
    /*
    Add a certain amount of points to the score based on the bonus value
    @param {Number} bonus
    @return {Object}
    */
    return { ...currentScore, score: Math.round(currentScore.score + bonus) }
}