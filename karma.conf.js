module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
     // 测试环境需要加载的JS信息。执行顺序是按加载顺序来的
    files: [
      'assets/vendor/angular.js',
      'assets/vendor/angular-mocks.js',
      // 'test/jasmine-demo.js',
      'test/module.js',
      'test/module.spec.js',
    ]
  });
};