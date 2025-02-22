const testData = [
    { rolls: new Array(20).fill(0), expected: 0, description: "Gutter game (all 0s)" },
    { rolls: new Array(20).fill(1), expected: 20, description: "All ones (20 times 1)" },
    { rolls: [5, 5, 3, ...new Array(17).fill(0)], expected: 16, description: "Spare followed by 3" },
    { rolls: [10, 3, 4, ...new Array(16).fill(0)], expected: 24, description: "Strike followed by 3 and 4" },
    { rolls: new Array(12).fill(10), expected: 300, description: "Perfect game (all strikes)" },
    { rolls: [0, 10, 5, 3, ...new Array(16).fill(0)], expected: 23, description: "Spare followed by 5 and 3" },
    { rolls: [10, 10, 10, 5, 3, ...new Array(14).fill(0)], expected: 81, description: "Three consecutive strikes followed by 5 and 3" },
    { rolls: [9, 1, 10, 5, 5, 3, ...new Array(14).fill(0)], expected: 56, description: "Spare followed by strike, another spare, and 3" },
    { rolls: [10, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0, 10, 0, 0], expected: 50, description: "Alternating strikes and zeros" },
    { rolls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], expected: 300, description: "Another perfect game" },
    { rolls: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], expected: 150, description: "All spares (all 5s)" },
    { rolls: [9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9], expected: 190, description: "Alternating 9s and spares" },
    { rolls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5], expected: 285, description: "Perfect game except last frame is spare (5,5)" }
];

// Export test data so it can be used in BowlingGame.test.js
module.exports = testData;
