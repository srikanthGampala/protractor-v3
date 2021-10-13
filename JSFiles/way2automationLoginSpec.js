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
const way2automationLogin_1 = require("./pageObjects/way2automationLogin");
let gb = new way2automationLogin_1.way2automationLogin;
var d = require("./data2.js");
var using = require('jasmine-data-provider');
describe("way2autmation login automation", () => __awaiter(void 0, void 0, void 0, function* () {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("way2automation login module validation started");
    }));
    afterAll(() => {
        console.log("way2automation login module validation completed");
    });
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Browser started");
        //await browser.waitForAngularEnabled(false)
        yield protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        yield protractor_1.browser.manage().deleteAllCookies();
    }));
    afterEach(() => {
        protractor_1.browser.sleep(2000);
        console.log("Browser closed");
    });
    using(d.Datadriven, function (data, description) {
        it("way2autmation login scenario positive cases" + description, () => __awaiter(this, void 0, void 0, function* () {
            //browser.waitForAngularEnabled(false);
            //await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
            //await browser.manage().window().maximize();
            yield protractor_1.browser.sleep(2000);
            yield gb.UserName.sendKeys(data.username);
            yield gb.password.sendKeys(data.password);
            yield gb.UserDescription.sendKeys(data.udescription);
            yield gb.LoginButton.click();
            yield protractor_1.browser.sleep(3000);
            yield expect(gb.AfterLoginMessage.getText()).toBe("You're logged in!!");
            yield protractor_1.browser.sleep(2000);
            yield gb.logoutbutton.click();
            yield protractor_1.browser.sleep(2000);
        }));
    });
    xit("way2autmation login scenario logout case", () => __awaiter(void 0, void 0, void 0, function* () {
        //browser.waitForAngularEnabled(false);
        //await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        //await browser.manage().window().maximize();
        //await browser.sleep(2000);    
        yield gb.UserName.sendKeys("angular");
        yield gb.password.sendKeys("password");
        yield gb.UserDescription.sendKeys("angular");
        yield gb.LoginButton.click();
        yield protractor_1.browser.sleep(3000);
        yield expect(gb.AfterLoginMessage.getText()).toBe("You're logged in!!");
        yield protractor_1.browser.sleep(3000);
        yield gb.logoutbutton.click();
        yield protractor_1.browser.sleep(2000);
    }));
    it("way2autmation login tooltips and negative cases validation", () => __awaiter(void 0, void 0, void 0, function* () {
        //browser.waitForAngularEnabled(false);
        //await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        //await browser.manage().window().maximize();
        yield protractor_1.browser.sleep(2000);
        yield gb.UserName.sendKeys("sr");
        yield gb.password.sendKeys("12345");
        yield expect(gb.usernametootltip.getText()).toBe("Your username must be between 3 and 50 characters long");
        yield gb.UserName.clear();
        yield protractor_1.browser.sleep(2000);
        yield gb.password.clear();
        yield protractor_1.browser.sleep(2000);
        yield gb.UserName.sendKeys("sri");
        yield gb.password.sendKeys("12");
        yield protractor_1.browser.sleep(2000);
        yield expect(gb.usernametootltip.getText()).toBe("Your username must be between 3 and 100 characters long");
        yield protractor_1.browser.sleep(2000);
        yield gb.password.clear();
        yield gb.password.sendKeys("12345");
        yield gb.UserDescription.sendKeys("srikanth");
        yield gb.LoginButton.click();
        yield protractor_1.browser.sleep(3000);
        yield expect(gb.LoginFailure.getText()).toBe("Username or password is incorrect");
        yield protractor_1.browser.sleep(3000);
    }));
}));
xdescribe("globalsqa.com site Login teting", () => __awaiter(void 0, void 0, void 0, function* () {
    it("Login functionality on globalsqa site", () => __awaiter(void 0, void 0, void 0, function* () {
        //browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(1000);
        //    await gb.ExistinguserLogin.sendKeys("abcdef");
        //    await gb.ExistingUserPwd.sendKeys("456789");
        yield protractor_1.browser.sleep(3000);
        yield gb.LoginButton.click();
        yield protractor_1.browser.sleep(3000);
        //await expect(gb.LoginMessage.getText()).toBe("You're logged in!!");
        yield protractor_1.browser.sleep(1000);
    }));
}));
/*xdescribe("globalsqa.com site Login user verification",async()=>{

    it("Registered users verfication on globalsqa site",async()=>
    {
        //browser.waitForAngularEnabled(false);
        await browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        await browser.manage().window().maximize();
        await browser.sleep(3000);
        //await gb.ExistinguserLogin.sendKeys("defghi");
        //await gb.ExistingUserPwd.sendKeys("45678");
        await gb.LoginButton.click();
        await browser.sleep(2000);
       // await expect(gb.LoginMessage.getText()).toBe("You're logged in!!");
        await browser.sleep(1000);
       // element.all(by.css("ul[class='ng-scope']")).
        //await gb.LoginUserCount.each(function(item)
        {
            //item.element(by.css("ul[class='ng-scope'] li")).getText().then(
                function(text){
                    console.log(text);
                })
        })

     
    })

}) */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F5MmF1dG9tYXRpb25Mb2dpblNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi93YXkyYXV0b21hdGlvbkxvZ2luU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUdyQywyRUFBd0U7QUFDeEUsSUFBSSxFQUFFLEdBQUMsSUFBSSx5Q0FBbUIsQ0FBQztBQUMvQixJQUFJLENBQUMsR0FBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUMsUUFBUSxDQUFDLGdDQUFnQyxFQUFDLEdBQU8sRUFBRTtJQUMvQyxTQUFTLENBQUMsR0FBTyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFBO0lBQ2pFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsR0FBRSxFQUFFO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFBO0lBQy9ELENBQUMsQ0FBQyxDQUFBO0lBQ0YsVUFBVSxDQUFDLEdBQU8sRUFBRTtRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsNENBQTRDO1FBQzVDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMEVBQTBFLENBQUMsQ0FBQTtRQUM3RixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsU0FBUyxDQUFDLEdBQUUsRUFBRTtRQUVWLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNGLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFDLFVBQVMs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