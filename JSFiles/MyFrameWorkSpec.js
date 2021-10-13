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
const protractor_2 = require("protractor");
const globalsqaHomePage_1 = require("./pageObjects/globalsqaHomePage");
let gb = new globalsqaHomePage_1.globalsqaHomePage;
var d = require("./data.js");
var using = require('jasmine-data-provider');
describe("globalsqa.com site Registration teting", () => __awaiter(void 0, void 0, void 0, function* () {
    using(d.Datadriven, function (data, description) {
        it("Registration functionality on globalsqa site", () => __awaiter(this, void 0, void 0, function* () {
            //browser.waitForAngularEnabled(false);
            yield protractor_1.browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
            yield protractor_1.browser.manage().window().maximize();
            yield protractor_1.browser.sleep(3000);
            yield gb.registerButton.click();
            yield protractor_1.browser.sleep(3000);
            yield gb.FirstName.sendKeys(data.firstname);
            yield gb.LastName.sendKeys(data.lastname);
            yield gb.UserName.sendKeys(data.username);
            yield gb.password.sendKeys(data.password);
            yield protractor_1.browser.sleep(3000);
            yield gb.RegisterUser.click();
            yield protractor_1.browser.sleep(3000);
            yield expect(gb.flashMessage.getText()).toBe("Registration successful").then(function () {
                console.log("user registered successfully");
            });
            // await browser.sleep(2000);
            // await gb.ExistinguserLogin.sendKeys(data.elogin);
            // await gb.ExistingUserPwd.sendKeys(data.epassword);
            // await browser.sleep(2000);
            // await gb.LoginButton.click();
            // await browser.sleep(3000);
            // await expect(gb.LoginMessage.getText()).toBe("You're logged in!!");
            // await console.log("user logged in successfully")
            // await browser.sleep(1000);
        }));
    });
}));
xdescribe("globalsqa.com site Login teting", () => __awaiter(void 0, void 0, void 0, function* () {
    it("Login functionality on globalsqa site", () => __awaiter(void 0, void 0, void 0, function* () {
        //browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(1000);
        yield gb.ExistinguserLogin.sendKeys("abcdef");
        yield gb.ExistingUserPwd.sendKeys("456789");
        yield protractor_1.browser.sleep(3000);
        yield gb.LoginButton.click();
        yield protractor_1.browser.sleep(3000);
        yield expect(gb.LoginMessage.getText()).toBe("You're logged in!!");
        yield protractor_1.browser.sleep(1000);
    }));
}));
xdescribe("globalsqa.com site Login user verification", () => __awaiter(void 0, void 0, void 0, function* () {
    it("Registered users verfication on globalsqa site", () => __awaiter(void 0, void 0, void 0, function* () {
        //browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(3000);
        yield gb.ExistinguserLogin.sendKeys("defghi");
        yield gb.ExistingUserPwd.sendKeys("45678");
        yield gb.LoginButton.click();
        yield protractor_1.browser.sleep(2000);
        yield expect(gb.LoginMessage.getText()).toBe("You're logged in!!");
        yield protractor_1.browser.sleep(1000);
        // element.all(by.css("ul[class='ng-scope']")).
        yield gb.LoginUserCount.each(function (item) {
            item.element(protractor_2.by.css("ul[class='ng-scope'] li")).getText().then(function (text) {
                console.log(text);
            });
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlGcmFtZVdvcmtTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vTXlGcmFtZVdvcmtTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLDJDQUF5QztBQUV6Qyx1RUFBb0U7QUFDcEUsSUFBSSxFQUFFLEdBQUMsSUFBSSxxQ0FBaUIsQ0FBQztBQUM3QixJQUFJLENBQUMsR0FBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDNUIsSUFBSSxLQUFLLEdBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUMsUUFBUSxDQUFDLHdDQUF3QyxFQUFDLEdBQU8sRUFBRTtJQUN4RCxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBQyxVQUFTLElBQUksRUFBQyxXQUFXO1FBQzNDLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBQyxHQUFPLEVBQUU7WUFFdkQsdUNBQXVDO1lBRXZDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUZBQW1GLENBQUMsQ0FBQztZQUN2RyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMx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