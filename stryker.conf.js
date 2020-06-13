module.exports = (config) => {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    testRunner: 'jest',
    maxConcurrentTestRunners: 4,
    reporters: ['html', 'clear-text', 'progress', 'dashboard'],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: ['src/**/*.ts?(x)', '!src/**/*@(.test|.spec|Spec).ts?(x)'],
    webpack: {
      configFile: './node_modules/react-scripts/config/webpack.config.js',
    },
    jest: {
      project: 'react',
    },
  });
};
