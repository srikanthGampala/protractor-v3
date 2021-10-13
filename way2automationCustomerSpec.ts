import { browser, by, element } from "protractor";
import { text } from "stream/consumers";


describe("customer Module automation", function(){
    beforeEach(async()=>
    {
    console.log("Browser started")
    //await browser.waitForAngularEnabled(false)
    await browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login")
    await browser.manage().deleteAllCookies();
    })
    afterEach(()=>
    {
        browser.sleep(2000)
    console.log("Browser closed")
    })

    it("cutomerlogin", function(){
        browser.sleep(2000);
        element(by.buttonText("Customer Login")).click();
        browser.sleep(2000);
        element.all(by.tagName("option")).get(2).click();
        browser.sleep(3000);
        element(by.buttonText("Login")).click();
        browser.sleep(3000);
        element(by.xpath("//span[@class='fontBig ng-binding']")).getText().then(function(text){
            expect(text).toBe("Harry Potter");
            console.log("you have selected: "+ text);
        })
        browser.sleep(1000);
        element.all(by.className("ng-binding")).get(2).getText().then(function(amount){
            expect(amount).toBe("0");
            console.log("intial amount of "+ amount);
        })
        element(by.buttonText("Deposit")).click();
        browser.sleep(1000);
        element(by.model("amount")).sendKeys("10000");
        element(by.css("button[type='submit']")).click();
        element(by.css(".error.ng-binding")).getText().then(function(msg){
            expect(msg).toBe("Deposit Successful");
            console.log(msg);
            
        })
        element.all(by.className("ng-binding")).get(2).getText().then(function(deposit){
            expect(deposit).toBe("10000");
            console.log("deposited  amount is "+ deposit);

        })
        browser.sleep(1000)
        element(by.partialButtonText("Withdrawl")).click();
        element(by.css("input[placeholder='amount']")).sendKeys(5000);
        element(by.buttonText("Withdraw")).click();
        element(by.css(".error.ng-binding")).getText().then(function(msg){
        expect(msg).toBe("Transaction successful");
        console.log(msg);
        })
        element.all(by.className("ng-binding")).get(2).getText().then(function(Balance){
            expect(Balance).toBe("5000");
            console.log("Balance after withdrwan is  "+ Balance);
        })
        

    })
})