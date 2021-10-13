import { browser } from "protractor";
import { element, by } from "protractor";
import { UseExistingWebDriver } from "protractor/built/driverProviders";
import { registrationform } from "./pageObjects/registrationform";

let rp=new registrationform();
var d= require("./registrationData.js");
var using= require('jasmine-data-provider');
describe("registration form validation",async()=>{
    beforeAll(()=>{
        console.log("way2automation registration module validation started")
    })
    afterAll(()=>{
    console.log("way2automation Registration module validation completed")
    })
    beforeEach(async()=>
    {
    console.log("Browser started")
    await browser.waitForAngularEnabled(false)
    await browser.get("http://way2automation.com/way2auto_jquery/registration.php#load_box");
    
    await browser.manage().deleteAllCookies()
    })
    afterEach(()=>
    {
        browser.sleep(1000)
    console.log("Browser closed")
    })
    using(d.Datadriven,function(data,description){
    it("Registration form filling"+description,async()=>
    {
       // await browser.waitForAngularEnabled(false);
        await browser.sleep(1000);
        await rp.FirstName.sendKeys(data.Firstname);
        await rp.LastName.sendKeys(data.Lastname);
        await browser.sleep(1000);
        await rp.MartialStatus.get(1).click();
        await browser.sleep(1000);
        await rp.hobby.get(0).click();
        await browser.sleep(1000);
        await rp.country.click();
        await browser.sleep(1000);
        await rp.countryvalue.click();
        await browser.sleep(1000);
        await rp.DOBMonth.click();
        await rp.DOBMonthvalue.click()
        await browser.sleep(1000);
        await rp.DOBDay.click();
        await rp.DOBdayvalue.click();
        await browser.sleep(1000);
        await rp.DOBYear.click();
        await browser.sleep(1000);
        await rp.DOBYearvalue.click();
        await browser.sleep(1000);
        await rp.phonenumber.sendKeys(data.Phonenumber);
        await rp.username.sendKeys(data.username);
        await rp.email.sendKeys(data.Email);
        await browser.sleep(1000);
        await rp.choosefile.sendKeys("C:\\Users\\test\\Pictures\\whtpic1.jpg");
        await rp.AboutYourself.sendKeys(data.AboutYourSelf);
        await rp.password.sendKeys(data.password);
        await rp.confirmpassword.sendKeys(data.confirmpassword);
        await browser.sleep(2000);
        //await rp.submitbuton.click();
        //await browser.sleep(2000);
        
        });
        
        
    })
})

   