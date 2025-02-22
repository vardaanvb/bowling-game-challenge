class BowlingGame {
    constructor() {
        this.rolls = [];
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    score() {
        let totalScore = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                totalScore += 10 + this.getStrikeBonus(rollIndex);
                rollIndex += 1;
            } else if (this.isSpare(rollIndex)) {
                totalScore += 10 + this.getSpareBonus(rollIndex);
                rollIndex += 2;
            } else {
                totalScore += this.getFrameScore(rollIndex);
                rollIndex += 2;
            }
        }

        return totalScore;
    }

    isStrike(index) {
        return this.rolls[index] === 10;
    }

    isSpare(index) {
        return this.rolls[index] + this.rolls[index + 1] === 10;
    }

    getStrikeBonus(index) {
        return (this.rolls[index + 1] || 0) + (this.rolls[index + 2] || 0);
    }

    getSpareBonus(index) {
        return this.rolls[index + 2] || 0;
    }

    getFrameScore(index) {
        return (this.rolls[index] || 0) + (this.rolls[index + 1] || 0);
    }
}

module.exports = BowlingGame;
