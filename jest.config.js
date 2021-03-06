/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(svg|jpg|jpeg|png|webp)$': '<rootDir>/test/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/\\.next/'],
}
