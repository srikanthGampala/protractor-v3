import { browser, by, element } from "protractor";
import { clearScreenDown } from "readline";



describe("Auotmate O365", function(){
    beforeEach(async()=>
    {
    console.log("Browser started")
    await browser.waitForAngularEnabled(false)
    await browser.get("https://outlook.office365.com/")
    //await browser.manage().deleteAllCookies();
    })
    afterEach(()=>
    {
        browser.sleep(2000)
    console.log("Browser closed")
    })

    it(" Outlook login", function(){
        
        browser.sleep(1000);
        element(by.name("loginfmt")).sendKeys("srikanth.gampala@sonata-software.com");
        browser.sleep(2000);
        element(by.css("#idSIButton9")).click();
        browser.sleep(4000);
        element(by.xpath("//span[normalize-space()='Sonata Software']")).click();
        browser.sleep(2000);
        element(by.name("Password")).sendKeys("Devansh@23");
        browser.sleep(2000);
        element(by.xpath("//span[@id='submitButton']")).click();
        browser.sleep(1000);

        //input[@id='KmsiCheckboxField']
        //span[@id='submitButton']
        element(by.id("idSIButton9")).click();
        // browser.sleep(1000);
        browser.sleep(2000);

        element(by.xpath("//div[@id='AgAAAAAAAQACAAAAAVQTTwAAAAA=']")).click();
        browser.sleep(2000);
        // element(by.css("#id__7")).click();
        // browser.sleep(2000);
        element(by.xpath("//button[@id='read_ellipses_menu']")).click();
        browser.sleep(2000);


        // element(by.xpath("//input[@aria-label='To']")).sendKeys("g3.srikanth@gmail.com;");
        // browser.sleep(2000);
        // element(by.css("#TextField212")).sendKeys("order 9999");
        // browser.sleep(2000);
        // element(by.css("button[name='Send']")).click();
        // browser.sleep(2000);
        //.ms-Icon.root-90.css-157.ms-Button-icon._3elxfLs8GcU_Dugz30Zho0.icon-171[data-icon-name='More']


        

    })
})
