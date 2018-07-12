// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),	
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    // customLaunchers: {
    // 	ChromeHeadless: {
    // 	    base: 'ChromeCanary',
    // 		flags: [
    // 		    '--headless',
    // 		    '--disable-gpu',		    
    // 		    '--remote-debugging-port=9222',
    // 		],
    // 	}
      // },
  customLaunchers:{
      PhantomJS_custom: {
          base: 'PhantomJS',
          options: {
              windowName: 'my-window',
              settings: {
		  webSecurityEnabled: false
              }
        },
        flags: ['--load-images=true'],
        debug: true
      }
  },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul']
              : ['progress','kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
      browsers: ['PhantomJS_custom'],//      browsers: ['ChromeHeadless'],
    singleRun: false
  });
};
