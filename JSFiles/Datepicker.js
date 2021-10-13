"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const driver = require('protractor');
const { browser } = require('protractor');
describe('Datepicker', () => {
    it('Form1', () => {
        browser.waitForAngularEnabled(false);
        console.log("browser opened");
        browser.manage().window().maximize();
        browser.get("http://way2automation.com/way2auto_jquery/datepicker.php#load_box");
        console.log("performing action on first page");
        browser.switchTo().frame(0);
        browser.element(protractor_1.by.css("input.hasDatepicker")).click();
        browser.element(protractor_1.by.css("input.hasDatepicker")).sendKeys("10/09/2021").then(() => {
            console.log("Date enetered as 10/09/2021");
            browser.driver.sleep(1000);
        });
        // driver.browser.element.all(driver.by.css("[ng-model='formData.type']")).get(0).click();
        // driver.browser.element(driver.by.linkText("Next Section")).click().then(() => {
        //     console.log("navigated third page");
        //     driver.browser.sleep(1000);
        // })
        // driver.browser.element(driver.by.tagName("h3")).getText().then((text) => {
        //     console.log("This is the message after completion of form fill :  " + text);
        // })
        // driver.browser.element(driver.by.buttonText("Submit")).click().then(() => {
        //     console.log("Clicked on submit button");
        // })
        // driver.browser.sleep(3000).then(() => {
        //     console.log("Browser has been closed");
        //     console.log("Thanks for choosing protractor API");
        // })
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0RhdGVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFFcEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFDeEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDYixPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7UUFFakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2RCxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixDQUFDLENBQUMsQ0FBQTtRQUNGLDBGQUEwRjtRQUMxRixrRkFBa0Y7UUFDbEYsMkNBQTJDO1FBQzNDLGtDQUFrQztRQUVsQyxLQUFLO1FBQ0wsNkVBQTZFO1FBRTdFLG1GQUFtRjtRQUVuRixLQUFLO1FBQ0wsOEVBQThFO1FBQzlFLCtDQUErQztRQUMvQyxLQUFLO1FBR0wsMENBQTBDO1FBQzFDLDhDQUE4QztRQUM5Qyx5REFBeUQ7UUFFekQsS0FBSztJQUlULENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==