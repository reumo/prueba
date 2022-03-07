module.exports = {
    roots: ['<rootDir>/src'],

    setupFilesAfterEnv: [
        '<rootDir>/test-utils/rtl-setup.ts',
        'jest-allure/dist/setup',
    ],

    transform: {
        '^.+\\.(ts|js)x?$': 'ts-jest',
    },

    transformIgnorePatterns: ['<rootDir>/node_modules/)'],

    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
        },
    },
    modulePathIgnorePatterns: ['node_modules'],

    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/src/test-utils/*.*',
        '<rootDir>/src/.*/*.styles.ts',
    ],

    moduleNameMapper: {
        // IMPORTANT: Do not remove. This allows jest to work with fonts, images etc...
        '\\.(css|less|sass|scss)$': '<rootDir>/jest.styles.mock.ts',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/jest.assets.mock.ts',
    },

    reporters: ['default', 'jest-allure'],
};
