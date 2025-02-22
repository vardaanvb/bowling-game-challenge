const BowlingGame = require("./BowlingGame");
const testData = require("./testData");

class BowlingGameTest {
    static testCase(rolls, expected, description) {
        let game = new BowlingGame();
        rolls.forEach(pins => game.roll(pins));
        let result = game.score();
        console.log(`${description}: ${result === expected ? '✅ Passed' : `❌ Failed (Expected ${expected}, got ${result})`}`);
    }

    static runTests() {
        console.log("Running Bowling Game Test Cases...\n");

        testData.forEach(({ rolls, expected, description }) => {
            this.testCase(rolls, expected, description);
        });

        console.log("\nAll test cases executed.");
    }
}

// Run all tests
BowlingGameTest.runTests();
