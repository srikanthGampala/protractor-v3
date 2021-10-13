import { by, By } from "protractor";

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
        
        browser.element(by.css("input.hasDatepicker")).click();
        browser.element(by.css("input.hasDatepicker")).sendKeys("10/09/2021").then(() => {
            console.log("Date enetered as 10/09/2021");
            browser.driver.sleep(1000);

        })
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



    })
})