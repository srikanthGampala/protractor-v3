"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const registrationform_1 = require("./pageObjects/registrationform");
let rp = new registrationform_1.registrationform();
var d = require("./registrationData.js");
var using = require('jasmine-data-provider');
describe("registration form validation", () => __awaiter(void 0, void 0, void 0, function* () {
    beforeAll(() => {
        console.log("way2automation registration module validation started");
    });
    afterAll(() => {
        console.log("way2automation Registration module validation completed");
    });
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Browser started");
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("http://way2automation.com/way2auto_jquery/registration.php#load_box");
        yield protractor_1.browser.manage().deleteAllCookies();
    }));
    afterEach(() => {
        protractor_1.browser.sleep(1000);
        console.log("Browser closed");
    });
    using(d.Datadriven, function (data, description) {
        it("Registration form filling" + description, () => __awaiter(this, void 0, void 0, function* () {
            // await browser.waitForAngularEnabled(false);
            yield protractor_1.browser.sleep(1000);
            yield rp.FirstName.sendKeys(data.Firstname);
            yield rp.LastName.sendKeys(data.Lastname);
            yield protractor_1.browser.sleep(1000);
            yield rp.MartialStatus.get(1).click();
            yield protractor_1.browser.sleep(1000);
            yield rp.hobby.get(0).click();
            yield protractor_1.browser.sleep(1000);
            yield rp.country.click();
            yield protractor_1.browser.sleep(1000);
            yield rp.countryvalue.click();
            yield protractor_1.browser.sleep(1000);
            yield rp.DOBMonth.click();
            yield rp.DOBMonthvalue.click();
            yield protractor_1.browser.sleep(1000);
            yield rp.DOBDay.click();
            yield rp.DOBdayvalue.click();
            yield protractor_1.browser.sleep(1000);
            yield rp.DOBYear.click();
            yield protractor_1.browser.sleep(1000);
            yield rp.DOBYearvalue.click();
            yield protractor_1.browser.sleep(1000);
            yield rp.phonenumber.sendKeys(data.Phonenumber);
            yield rp.username.sendKeys(data.username);
            yield rp.email.sendKeys(data.Email);
            yield protractor_1.browser.sleep(1000);
            yield rp.choosefile.sendKeys("C:\\Users\\test\\Pictures\\whtpic1.jpg");
            yield rp.AboutYourself.sendKeys(data.AboutYourSelf);
            yield rp.password.sendKeys(data.password);
            yield rp.confirmpassword.sendKeys(data.confirmpassword);
            yield protractor_1.browser.sleep(2000);
            //await rp.submitbuton.click();
            //await browser.sleep(2000);
        }));
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3JlZ2lzdHJhdGlvblNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFHckMscUVBQWtFO0FBRWxFLElBQUksRUFBRSxHQUFDLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUM5QixJQUFJLENBQUMsR0FBRSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN4QyxJQUFJLEtBQUssR0FBRSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM1QyxRQUFRLENBQUMsOEJBQThCLEVBQUMsR0FBTyxFQUFFO0lBQzdDLFNBQVMsQ0FBQyxHQUFFLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUE7SUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsR0FBRSxFQUFFO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsQ0FBQyxDQUFBO0lBQ3RFLENBQUMsQ0FBQyxDQUFBO0lBQ0YsVUFBVSxDQUFDLEdBQU8sRUFBRTtRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMscUVBQXFFLENBQUMsQ0FBQztRQUV6RixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsU0FBUyxDQUFDLEdBQUUsRUFBRTtRQUVWLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNGLEtBQUssQ0FBQyxD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