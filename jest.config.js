module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePattterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCorarageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
