const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|tsx?|ts?)$'

module.exports = {
  testEnvironment: 'jsdom',
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
  moduleNameMapper: {
    '@/components/(.*)': ['<rootDir>/components/$1'],
    '@/types/(.*)': ['<rootDir>/$1'],
    '@/shared/(.*)': ['<rootDir>/shared/$1'],
    '@/styles/(.*)': ['<rootDir>/shared/styles/$1'],
    '@/jsons/(.*)': ['<rootDir>/shared/jsons/$1'],
    '@/intl/(.*)': ['<rootDir>/shared/jsons/intl/$1'],
    '@/static/(.*)': ['<rootDir>/public/static/$1'],
    '@/services/(.*)': ['<rootDir>/services/$1'],
    '@/hooks/(.*)': ['<rootDir>/hooks/$1'],
    '@/hooks': ['<rootDir>/hooks/index.ts'],
    '@/intl': ['<rootDir>/shared/intl/index.ts'],
    '@/utils/(.*)': ['<rootDir>/tils/$1'],
    '@/renderer/(.*)': ['<rootDir>/utils/renderer/$1'],
    '@/(.*)': ['<rootDir>/$1']
  }
}
