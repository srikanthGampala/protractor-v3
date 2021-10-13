import { browser } from "protractor";
import { element, by } from "protractor";
import { UseExistingWebDriver } from "protractor/built/driverProviders";
import { way2automationLogin } from "./pageObjects/way2automationLogin";
let gb=new way2automationLogin;
var d= require("./data2.js");
var using= require('jasmine-data-provider');
describe("way2autmation login automation",async()=>{
    beforeAll(async()=>{
        console.log("way2automation login module validation started")
    })
    afterAll(()=>{
    console.log("way2automation login module validation completed")
    })
    beforeEach(async()=>
    {
    console.log("Browser started")
    //await browser.waitForAngularEnabled(false)
    await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
    await browser.manage().deleteAllCookies();
    })
    afterEach(()=>
    {
        browser.sleep(2000)
    console.log("Browser closed")
    })
    using(d.Datadriven,function(data,description){
    it("way2autmation login scenario positive cases"+description,async()=>
    {
        //browser.waitForAngularEnabled(false);
       
        //await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        //await browser.manage().window().maximize();
        await browser.sleep(2000);      
        await gb.UserName.sendKeys(data.username);
        await gb.password.sendKeys(data.password);
        await gb.UserDescription.sendKeys(data.udescription);
        await gb.LoginButton.click();
        await browser.sleep(3000);
        await expect(gb.AfterLoginMessage.getText()).toBe("You're logged in!!");
        await browser.sleep(2000);
        await gb.logoutbutton.click();
        await browser.sleep(2000);
        
        });
        
        
     
    })
    xit("way2autmation login scenario logout case",async()=>
    {
        //browser.waitForAngularEnabled(false);
       
        //await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        //await browser.manage().window().maximize();
        //await browser.sleep(2000);    
        await gb.UserName.sendKeys("angular");
        await gb.password.sendKeys("password");
        await gb.UserDescription.sendKeys("angular");
        await gb.LoginButton.click();
        await browser.sleep(3000);
        await expect(gb.AfterLoginMessage.getText()).toBe("You're logged in!!");
        await browser.sleep(3000);
        await gb.logoutbutton.click();
        await browser.sleep(2000);
        
       
        
        
     
    });
    it("way2autmation login tooltips and negative cases validation",async()=>
    {
        //browser.waitForAngularEnabled(false);
       
        //await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        //await browser.manage().window().maximize();
        await browser.sleep(2000);    
        await gb.UserName.sendKeys("sr");
        await gb.password.sendKeys("12345");
        await expect(gb.usernametootltip.getText()).toBe("Your username must be between 3 and 50 characters long");
        await gb.UserName.clear();
        await browser.sleep(2000);
        await gb.password.clear();
        await browser.sleep(2000);
        await gb.UserName.sendKeys("sri");
        await gb.password.sendKeys("12");
        await browser.sleep(2000);
        await expect(gb.usernametootltip.getText()).toBe("Your username must be between 3 and 100 characters long");
        await browser.sleep(2000);
        await gb.password.clear();
        await gb.password.sendKeys("12345");
        await gb.UserDescription.sendKeys("srikanth");
        await gb.LoginButton.click();
        await browser.sleep(3000);
        await expect(gb.LoginFailure.getText()).toBe("Username or password is incorrect");
        await browser.sleep(3000);
        
       
        
        
     
    });
})

   
    


xdescribe("globalsqa.com site Login teting",async()=>{

    it("Login functionality on globalsqa site",async()=>
    {
        //browser.waitForAngularEnabled(false);
       await browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
       await browser.manage().window().maximize();
       await browser.sleep(1000);
    //    await gb.ExistinguserLogin.sendKeys("abcdef");
    //    await gb.ExistingUserPwd.sendKeys("456789");
       await browser.sleep(3000);
       await gb.LoginButton.click();
       await browser.sleep(3000);
       //await expect(gb.LoginMessage.getText()).toBe("You're logged in!!");
       await browser.sleep(1000);
     
    })

}) 
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