module.exports = {
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    roots: ['<rootDir>/src/'],
    setupTestFrameworkScriptFile: '<rootDir>/enzyme.config.js',
    moduleNameMapper: {
        '^Config(.*)$': '<rootDir>/src/config/$1',
        '^Components(.*)$': '<rootDir>/src/components/$1',
        '^Wrappers(.*)$': '<rootDir>/src/wrappers/$1',
        '^Pages(.*)$': '<rootDir>/src/pages/$1',
        '^Routes(.*)$': '<rootDir>/src/routes/$1',
        '^Reducers(.*)$': '<rootDir>/src/reducers/$1'
    }
};