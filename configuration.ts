// An example configuration file
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
import {browser, Config} from "protractor";
export let config: Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect:true,
    // Capabilities to be passed to the webdriver instance.
   Capabilities: [
      {
      browserName: 'msedgedriver'
      }
      // },
      // {
      //   browserName: 'firefox'
      //   }
      ],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['outlookAutomationSpec.js'],

    onPrepare: function() {
      browser.driver.manage().window().maximize();
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
      
   },
   framework: 'jasmine',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    }
  };
