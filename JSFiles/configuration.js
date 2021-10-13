"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// An example configuration file
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    Capabilities: [
        //{
        //browserName: 'chrome'
        //},
        // },
        {
            browserName: 'firefox'
        }
    ],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['way2automationBankingSpec.js'],
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0NBQWdDO0FBQ2hDLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDeEUsMkNBQTJDO0FBQ2hDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFDbEIsdURBQXVEO0lBQ3hELFlBQVksRUFBRTtRQUNYLEdBQUc7UUFDSCx1QkFBdUI7UUFDdkIsSUFBSTtRQUNKLEtBQUs7UUFDTDtZQUNFLFdBQVcsRUFBRSxTQUFTO1NBQ3JCO0tBQ0Y7SUFDSCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztJQUV2QyxTQUFTLEVBQUU7UUFDVCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUMxQixJQUFJLG9CQUFvQixDQUFDO1lBQ3ZCLFFBQVEsRUFBRSxvQkFBb0I7U0FDL0IsQ0FBQyxDQUNILENBQUM7SUFDTCxDQUFDO0lBQ0QsU0FBUyxFQUFFLFNBQVM7SUFDbkIsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNqQixVQUFVLEVBQUUsSUFBSSxFQUFFLHlDQUF5QztLQUMxRDtDQUNGLENBQUMifQ==