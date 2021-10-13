import { browser,element,by, $, protractor } from "protractor"

describe('interact with buttons', ()=>{
    beforeAll(async()=>{
        await browser.get('https://letcode.in/button')
    })
    it('Protractor specific locator', async ()=>{
        let text= await element(by.buttonText('Goto Home')).getText()
        console.log(text);
    })
    it('Get Position', async ()=>{
        let location= await element(by.id('#button2')).getLocation();
        console.log(location.x);
        console.log(location.y);
        //op as .345.600061035156
        // y coordinates as 366
    it('Get color of button', async()=>{
        let size= await element(by.buttonText('Submit Button')).getSize();
        console.log(size.height);
        console.log(size.width)
        //o/p 38 and 158
    })
    it('Find the height and width ', async()=>{
        let buttonColor= await $('.btn.btn-primary').getCssValue('background-color');
        console.log(buttonColor);
        //op rgb(0,123,255,1)
    })
    // it('Apeend and Tab ', async()=>{
    //     element(by.id("john")).senconsole.log(buttonColor);
    //     //op rgb(0,123,255,1)
    // })
})
})