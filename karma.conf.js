module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai'
    ],
    reporters: ['spec']
  });
};
