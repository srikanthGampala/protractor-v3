import { By } from "protractor";

const driver = require('protractor');
const { browser } = require('protractor');
describe('Formfill', () => {
    it('Form1', () => {
        console.log("browser opened");
        driver.browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");
        driver.browser.manage().window().maximize();
        console.log("performing action on first page");
        driver.browser.element(By.model("formData.name")).sendKeys("lord shiva");
        driver.browser.element(driver.by.css("[ng-model='formData.email']")).sendKeys("Om namah shivaiah");
        driver.browser.element(driver.by.linkText("Next Section")).click().then(() => {
            console.log("Navigated to second page");
            browser.driver.sleep(1000);

        })
        driver.browser.element.all(driver.by.css("[ng-model='formData.type']")).get(0).click();
        driver.browser.element(driver.by.linkText("Next Section")).click().then(() => {
            console.log("navigated third page");
            driver.browser.sleep(1000);

        })
        driver.browser.element(driver.by.tagName("h3")).getText().then((text) => {

            console.log("This is the message after completion of form fill :  " + text);

        })
        driver.browser.element(driver.by.buttonText("Submit")).click().then(() => {
            console.log("Clicked on submit button");
        })
        var alert= driver.browser.switchTo().alert();
         alert.accept().then(()=>{
             console.log("alert displayed and accedpted");
         }
         )


        driver.browser.sleep(3000).then(() => {
            console.log("Browser has been closed");
            console.log("Thanks for choosing protractor API");

        })



    })
})