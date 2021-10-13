import { $, $$, browser, by, element } from "protractor"
import { BrowserStack } from "protractor/built/driverProviders"
import { protractor } from "protractor/built/ptor"

describe('Interact with tables',()=>{
    beforeAll(async()=>{
        await browser.get('https://letcode.in/selectable')
    })
it ('table', async()=>{
    //element(by.id)
   let Columns= $$('tbody tr td:nth-child(1)')
   let count= await Columns.count()
   console.log(count)
    for (let i=0; i<count; i++){
       let columndata= await Columns.get(i).getText();
       console.log(columndata)
   }
   //console.log(location.y);

})
   
xit ('Button color', async()=>{
    //element(by.id)
   let color= await $('.btn.btn-primary').getCssValue('background-color')
   console.log(color)
   //o/p-- .rgba(0,123,255,1)
   
})

xit ('Find the height and width', async()=>{
    //element(by.id)
   let size=await element(by.buttonText('Submit Button')).getSize()
   console.log(size.height);
    console.log(size.width)

   //o/p-- .rgba(0,123,255,1)
});

it ('Multi Select', async()=>{
    //element(by.id)
   let allItems= await element.all(by.id("selectable"));
   let selelnium= await element.all(by.id("selectable")).get(0);
   let Appium= element.all(by.id("selectable")).get(2);
   browser.actions().sendKeys(protractor.Key.CONTROL)
   .click(await selelnium.getWebElement())
   .click(await Appium.getWebElement())
   .perform()

   //o/p-- .rgba(0,123,255,1)
});
    
it ('letcode sortable', async()=>{
    //element(by.id)
   let allItems= await element.all(by.id("selectable"));
   let selelnium= await element.all(by.id("selectable")).get(0);
   let Appium= element.all(by.id("selectable")).get(2);
   browser.actions().sendKeys(protractor.Key.CONTROL)
   .click(await selelnium.getWebElement())
   .click(await Appium.getWebElement())
   .perform()

   //o/p-- .rgba(0,123,255,1)
});     



})