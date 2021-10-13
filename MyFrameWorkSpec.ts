import { browser } from "protractor";
import { element, by } from "protractor";
import { UseExistingWebDriver } from "protractor/built/driverProviders";
import { globalsqaHomePage } from "./pageObjects/globalsqaHomePage";
let gb=new globalsqaHomePage;
var d= require("./data.js");
var using= require('jasmine-data-provider');
describe("globalsqa.com site Registration teting",async()=>{
   using(d.Datadriven,function(data,description){
    it("Registration functionality on globalsqa site",async()=>
    {
        //browser.waitForAngularEnabled(false);
       
        await browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        await browser.manage().window().maximize();
        await browser.sleep(3000);
        await gb.registerButton.click();
        await browser.sleep(3000);
        await gb.FirstName.sendKeys(data.firstname);
        await gb.LastName.sendKeys(data.lastname);
        await gb.UserName.sendKeys(data.username);
        await gb.password.sendKeys(data.password);
        await browser.sleep(3000);
        await gb.RegisterUser.click();
        await browser.sleep(3000);
        await expect(gb.flashMessage.getText()).toBe("Registration successful").then(function(){
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
     
    })

   });
    

})
xdescribe("globalsqa.com site Login teting",async()=>{

    it("Login functionality on globalsqa site",async()=>
    {
        //browser.waitForAngularEnabled(false);
       await browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
       await browser.manage().window().maximize();
       await browser.sleep(1000);
       await gb.ExistinguserLogin.sendKeys("abcdef");
       await gb.ExistingUserPwd.sendKeys("456789");
       await browser.sleep(3000);
       await gb.LoginButton.click();
       await browser.sleep(3000);
       await expect(gb.LoginMessage.getText()).toBe("You're logged in!!");
       await browser.sleep(1000);
     
    })

}) 
xdescribe("globalsqa.com site Login user verification",async()=>{

    it("Registered users verfication on globalsqa site",async()=>
    {
        //browser.waitForAngularEnabled(false);
        await browser.get("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login");
        await browser.manage().window().maximize();
        await browser.sleep(3000);
        await gb.ExistinguserLogin.sendKeys("defghi");
        await gb.ExistingUserPwd.sendKeys("45678");
        await gb.LoginButton.click();
        await browser.sleep(2000);
        await expect(gb.LoginMessage.getText()).toBe("You're logged in!!");
        await browser.sleep(1000);
       // element.all(by.css("ul[class='ng-scope']")).
        await gb.LoginUserCount.each(function(item)
        {
            item.element(by.css("ul[class='ng-scope'] li")).getText().then(
                function(text){
                    console.log(text);
                })
        })

     
    })

}) 


