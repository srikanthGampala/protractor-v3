import { $, $$, browser, by, element } from "protractor"
import { AddCustoimerModule} from "./pageObjects/AddCustoimerModule";
import { CustomerPage } from "./pageObjects/CustomerPage";
import { OpenAccountpage } from "./pageObjects/OpenAccountpage";
var d= require("./bankingcustomerData.js");
var using= require('jasmine-data-provider');
const AddcustomerPage= new AddCustoimerModule();
const OpAccountpage= new OpenAccountpage();
const customersPage= new CustomerPage();
describe("way2automation banking application validation", function(){
    
    beforeAll(async ()=>{
        console.log("way2automation banking module validation started");
        await browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login"); 
    })
    afterAll(async ()=>{
        //let types= await browser.manage().logs().getAvailableLogTypes();
    //console.log("Types :" + types);
    })
    beforeEach(async()=>
    {
    console.log("Browser started an navigating to url");
    //await browser.waitForAngularEnabled(false)
    //await browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");  
    //await browser.manage().deleteAllCookies();
    })
    afterEach(()=>
    {
        
    console.log("Test complleted and Browser closed")
    })
    //let alert=browser.switchTo().alert();
    //let msg=alert.getText();
    using(d.Datadriven,function(data,description){
    it("BankManager Login workflow validation"+ description,async()=>{
        //validating heading of the page
        await AddcustomerPage.validateHeading();
        //clicking on bankmanager Login Button
        await AddcustomerPage.bankmanagerLogin();
        //clicking on add customer button
        AddcustomerPage.clickMainAddcustomerBtn();
        //customer form filling
        await AddcustomerPage.enterFirstName(data.fname);
        await AddcustomerPage.lastName(data.lname);
        await AddcustomerPage.postalcode(data.pcode);
        await AddcustomerPage.clickaddCustomer();
        //aftet clikcing on addcustomer button printing alert msg on console
        await AddcustomerPage.alertmsg();
        //closing the alert
        await AddcustomerPage.acceptAlertTxt();

    })
    })
    //open account functionality automation
    it("account page validation", async ()=>{
       
        //clicking on bankmanager Login Button
        //await AddcustomerPage.bankmanagerLogin();
        
        //Clicking on Open Account Button
        
        await OpAccountpage.clickOnOpenAccount();
        //click on customer dropdown
        await OpAccountpage.clickOnCustomerDrpDown();
        //validating whether adder user is present in the list or not
        await OpAccountpage.validateAddedUserName();
        //after validation if added user found ther click on it 
        await OpAccountpage.clickOnAddedUser();
       //click on currency dropdown
        await OpAccountpage.clickOnCurrency();
        //selct currency as Rupee from the dropdown
        await OpAccountpage.selectCurrency();
        //click on process button
        await OpAccountpage.clickOnProcessBtn();
        //wait for the alert and read alert messge
        await OpAccountpage.alertmsg();
        //click on alert ok button
        await OpAccountpage.acceptAlert();

               
    })
    using(d.Datadriven,function(data,description){
    xit("open customer page validation"+description, async()=>{
        
        //click on bankamnager button
        //await AddcustomerPage.bankmanagerLogin();
        
        //clickon Customers button
        await customersPage.clickCustomersBtn();
        
        //Send previously created user account name : sri
        await customersPage.searchTxtBoxMsg(data.SearchMsg);
        //validate whether given uer name is present or not
        await customersPage.validateSearch();
        
        })

         })
    })   
    it("customer table sorting validation", async()=>{
        // await AddcustomerPage.bankmanagerLogin();
        await customersPage.clickCustomersBtn();
        await customersPage.sortandVerifyTable();
        //element(by.buttonText("Bank Manager Login")).click();
        // browser.sleep(1000);
        // element(by.css(".btn.btn-lg.tab.btn-primary")).click();
        // browser.sleep(1000);
        // let mytable=$$('tbody');
        // let rows = mytable.$$("tr");
        // let myData= rows.map(async(ele, index)=>{
        //     let data= ele.$$("td").get(0);
        //     return await data.getText();
            
        // });
        
        // let sortedData:any[]= (await myData).sort().reverse();
        // console.log("After sorting and reverse the array:" + sortedData);
        // browser.sleep(2000);
        // element(by.xpath("//thead//td[1]")).click();
        // let aftersortedData:any[] = await rows.map(async(ele, index)=>{
        //     let data= ele.$$("td").get(0);
        //     return await data.getText();
        
        // });
        // console.log("after ele sort click: " +  aftersortedData);
        // expect(sortedData).toEqual(aftersortedData);

})
    
    

 