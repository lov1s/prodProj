module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    ignorePatterns: [".eslintrc.js"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}", "**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        project: "tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier", "i18next"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        // "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": 1,
        "@typescript-eslint/no-floating-promises": 1,
        "@typescript-eslint/strict-boolean-expressions": 1,
        "@typescript-eslint/consistent-type-assertions": 1,
        "@typescript-eslint/no-non-null-assertion": 1,
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "variable",
                format: ["UPPER_CASE", "camelCase"],
                leadingUnderscore: "allowDouble",
            },
        ],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: ["data-testid"],
            },
        ],
    },
};
