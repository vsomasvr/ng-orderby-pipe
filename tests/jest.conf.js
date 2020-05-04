module.exports = {
    preset: 'jest-preset-angular',
    globals: {
        'ts-jest': {
            stringifyContentPathRegex: '\\.html$',
            tsConfig: 'tests/tsconfig.spec.json',
            astTransformers: [
                require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')
            ]
        }
    },
    testMatch: ['<rootDir>/tests/**/*.spec.ts'],
    rootDir: '../',
    testURL: 'http://localhost/'
};
