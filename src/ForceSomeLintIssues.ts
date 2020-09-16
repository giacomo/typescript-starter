class ForceSomeLintIssues {
    constructor() {
        let preferConst = 1; // 'preferConst' is never reassigned. Use 'const' instead

        const unusedVar = 2; // 'unusedVar' is assigned a value but never used

        const foo = "double-quotes"; // Strings must use singlequote

        const objectShorthand = {
            foo: foo, // Expected property shorthand
        }

        const commaDangle = {
            foo: 1,
            bar: 2 // Missing trailing comma
        }

        const arr = [1, 2, 3].map(item => item); // Expected parentheses around arrow function argument
    }

      // Expected indentation of 8 spaces but found 10

    // More than 2 blank lines not allowed



}
