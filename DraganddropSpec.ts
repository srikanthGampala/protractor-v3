import { $, $$, browser, by, element } from "protractor"

describe('Interact with tables',()=>{
    beforeAll(async()=>{
        await browser.waitForAngularEnabled(false);
        await browser.get('https://jqueryui.com/resizable/')
    })
xit ('Draggable', async()=>{
    //element(by.id)
    await browser.switchTo().frame(0);
   let src= $("#draggable")
   let locationX=(await src.getLocation()).x;
   let locationY=(await src.getLocation()).y;
   await browser.actions().dragAndDrop(
       await src.getWebElement(),
       {
           x: locationX + 50,
           y: locationY + 70
        }).perform()
    
   //console.log(location.y);

})
xit ('Drag and drop', async()=>{
    //element(by.id)
    await browser.switchTo().frame(0);
   let src= $("#draggable");
   let des= $("#droppable");
   await browser.actions().dragAndDrop(
   await src, await des).perform();
    browser.sleep(5000);
       
   //console.log(location.y);

})
it ('Resizable', async()=>{
    //element(by.id)
    await browser.switchTo().frame(0);
   let src= $(".ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se");
   //let des= $("#droppable");
   
   let locationX=(await src.getLocation()).x;
   let locationY=(await src.getLocation()).y;
   await browser.actions().dragAndDrop(
    await src.getWebElement(),
    {
        x: locationX + 30,
        y: locationY + 50
     }).perform()

    browser.sleep(5000);
       
   //console.log(location.y);

})
})