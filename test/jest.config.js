module.exports = {
    roots: ["<rootDir>"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "jest-enzyme",
        "<rootDir>/setupTests.ts"
    ],
    testMatch: [
        '**\\*.(spec|test).(tsx|ts|js)',
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
