"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const protractor_1 = require("protractor");
exports.config = {
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
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        }));
    },
    framework: 'jasmine',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0NBQWdDO0FBQ2hDLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDeEUsMkNBQTJDO0FBQ2hDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxlQUFlLEVBQUUsOEJBQThCO0lBQy9DLHFCQUFxQjtJQUNyQix1REFBdUQ7SUFDeEQsWUFBWSxFQUFFO1FBQ1g7WUFDQSxXQUFXLEVBQUUsY0FBYztTQUMxQjtRQUNELEtBQUs7UUFDTCxJQUFJO1FBQ0osMkJBQTJCO1FBQzNCLE1BQU07S0FDTDtJQUNILHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBRW5DLFNBQVMsRUFBRTtRQUNULG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUM7WUFDOUMsVUFBVSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQzFCLElBQUksb0JBQW9CLENBQUM7WUFDdkIsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDLENBQ0gsQ0FBQztJQUVMLENBQUM7SUFDRCxTQUFTLEVBQUUsU0FBUztJQUNuQix3Q0FBd0M7SUFDeEMsZUFBZSxFQUFFO1FBQ2pCLFVBQVUsRUFBRSxJQUFJLEVBQUUseUNBQXlDO0tBQzFEO0NBQ0YsQ0FBQyJ9