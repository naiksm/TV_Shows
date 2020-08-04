module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/*.config.js",
    "!**/vendor/**",
    "!**/tests/e2e/**",
    "!**/main.js",
    "!**/coverage/**",
    "!**/src/plugins/**"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
