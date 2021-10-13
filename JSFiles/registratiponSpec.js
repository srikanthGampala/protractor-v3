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
//var d= require("./data.js");
//var using= require('jasmine-data-provider');
describe("registration form validation", () => __awaiter(void 0, void 0, void 0, function* () {
    it("Registration form filling", () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("http://way2automation.com/way2auto_jquery/registration.php#load_box");
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(3000);
        yield rp.FirstName.sendKeys("srikanth");
        yield rp.MartialStatus.get(1).click();
        yield rp.hobby.get(1).click();
        // await rp.UserName.sendKeys(data.username);
        // await rp.password.sendKeys(data.password);
        // await browser.sleep(3000);
        // await rp.RegisterUser.click();
        // await browser.sleep(3000);
        // await expect(rp.flashMessage.getText()).toBe("Registration successful").then(function(){
        //    console.log("user registered successfully");
    }));
    // await browser.sleep(2000);
    // await rp.ExistinguserLogin.sendKeys(data.elogin);
    // await rp.ExistingUserPwd.sendKeys(data.epassword);
    // await browser.sleep(2000);
    // await rp.LoginButton.click();
    // await browser.sleep(3000);
    // await expect(rp.LoginMessage.getText()).toBe("You're logged in!!");
    // await console.log("user logged in successfully")
    // await browser.sleep(1000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aXBvblNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9yZWdpc3RyYXRpcG9uU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUdyQyxxRUFBa0U7QUFDbEUsSUFBSSxFQUFFLEdBQUMsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQzlCLDhCQUE4QjtBQUM5Qiw4Q0FBOEM7QUFDOUMsUUFBUSxDQUFDLDhCQUE4QixFQUFDLEdBQU8sRUFBRTtJQUU3QyxFQUFFLENBQUMsMkJBQTJCLEVBQUMsR0FBTyxFQUFFO1FBRXBDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1FBQ3pGLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEMsTUFBTSxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLDZDQUE2QztRQUM3Qyw2Q0FBNkM7UUFDN0MsNkJBQTZCO1FBQzdCLGlDQUFpQztRQUNqQyw2QkFBNkI7UUFDN0IsMkZBQTJGO1FBQzNGLGtEQUFrRDtJQUNsRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsNkJBQTZCO0lBQzdCLG9EQUFvRDtJQUNwRCxxREFBcUQ7SUFDckQsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isc0VBQXNFO0lBQ3RFLG1EQUFtRDtJQUVuRCw2QkFBNkI7QUFFakMsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9