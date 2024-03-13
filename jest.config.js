module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '{careers,components}/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.*.js', // dotfiles, e.g. ESLint
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.s?css$'],
  moduleNameMapper: {
    '^.+\\.s?css$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  transform: {
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '\\.(svg)$': '<rootDir>/jest/svg.transform',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
