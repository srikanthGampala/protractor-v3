import { browser } from "protractor";
import { element, by } from "protractor";
import { calculator } from "./pageObjects/calculator";
import { async } from "q";
import { angularHomePage } from "./pageObjects/angularHomePage";
    

describe("Chain Locators Demo", () => {
    it("Open Angular js website", async()=> {

        let calc=new calculator();
       
        /* browser.waitForAngularEnabled(false);cls
        browser.get('https://google');//non angular apps*/
        browser.get('https://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, and css for identical tags
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
        await calc.go.click();
        calc.getResult.getText().then(
            function (text) {
                console.log(text);
            })



    });
    it('Angular home page titile validation', async()=>
    {
        let ah=new angularHomePage();
        browser.get("https://angularjs.org");
        await ah.angularLink.click();
        await browser.sleep(2000);
        await ah.search.sendKeys("hello");
    })
})