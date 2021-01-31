const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// require('ts-node').register();
import { browser } from 'protractor'

exports.config = {
    directConnect: true, 
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://the-internet.herokuapp.com/',
    specs: ['./specs/sleep_spec.ts'],
    capabilities: {
      browserName: 'chrome',
    },
    jasmineNodeOpts: {
      print: function() {}
    },
    onPrepare: function () {
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: 'pretty'
        }
      }));
      beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        // browser.get('/')
      });
      afterEach(function () {
        browser.manage().deleteAllCookies();
        browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
        function (err) {
          throw err
        });
      });
    }
  };