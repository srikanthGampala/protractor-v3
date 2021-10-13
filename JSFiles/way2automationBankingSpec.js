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
const AddCustoimerModule_1 = require("./pageObjects/AddCustoimerModule");
const CustomerPage_1 = require("./pageObjects/CustomerPage");
const OpenAccountpage_1 = require("./pageObjects/OpenAccountpage");
var d = require("./bankingcustomerData.js");
var using = require('jasmine-data-provider');
const AddcustomerPage = new AddCustoimerModule_1.AddCustoimerModule();
const OpAccountpage = new OpenAccountpage_1.OpenAccountpage();
const customersPage = new CustomerPage_1.CustomerPage();
describe("way2automation banking application validation", function () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        console.log("way2automation banking module validation started");
        yield protractor_1.browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        //let types= await browser.manage().logs().getAvailableLogTypes();
        //console.log("Types :" + types);
    }));
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log("Browser started an navigating to url");
        //await browser.waitForAngularEnabled(false)
        //await browser.get("https://www.way2automation.com/angularjs-protractor/banking/#/login");  
        //await browser.manage().deleteAllCookies();
    }));
    afterEach(() => {
        console.log("Test complleted and Browser closed");
    });
    //let alert=browser.switchTo().alert();
    //let msg=alert.getText();
    using(d.Datadriven, function (data, description) {
        it("BankManager Login workflow validation" + description, () => __awaiter(this, void 0, void 0, function* () {
            //validating heading of the page
            yield AddcustomerPage.validateHeading();
            //clicking on bankmanager Login Button
            yield AddcustomerPage.bankmanagerLogin();
            //clicking on add customer button
            AddcustomerPage.clickMainAddcustomerBtn();
            //customer form filling
            yield AddcustomerPage.enterFirstName(data.fname);
            yield AddcustomerPage.lastName(data.lname);
            yield AddcustomerPage.postalcode(data.pcode);
            yield AddcustomerPage.clickaddCustomer();
            //aftet clikcing on addcustomer button printing alert msg on console
            yield AddcustomerPage.alertmsg();
            //closing the alert
            yield AddcustomerPage.acceptAlertTxt();
        }));
    });
    //open account functionality automation
    it("account page validation", () => __awaiter(this, void 0, void 0, function* () {
        //clicking on bankmanager Login Button
        //await AddcustomerPage.bankmanagerLogin();
        //Clicking on Open Account Button
        yield OpAccountpage.clickOnOpenAccount();
        //click on customer dropdown
        yield OpAccountpage.clickOnCustomerDrpDown();
        //validating whether adder user is present in the list or not
        yield OpAccountpage.validateAddedUserName();
        //after validation if added user found ther click on it 
        yield OpAccountpage.clickOnAddedUser();
        //click on currency dropdown
        yield OpAccountpage.clickOnCurrency();
        //selct currency as Rupee from the dropdown
        yield OpAccountpage.selectCurrency();
        //click on process button
        yield OpAccountpage.clickOnProcessBtn();
        //wait for the alert and read alert messge
        yield OpAccountpage.alertmsg();
        //click on alert ok button
        yield OpAccountpage.acceptAlert();
    }));
    using(d.Datadriven, function (data, description) {
        xit("open customer page validation" + description, () => __awaiter(this, void 0, void 0, function* () {
            //click on bankamnager button
            //await AddcustomerPage.bankmanagerLogin();
            //clickon Customers button
            yield customersPage.clickCustomersBtn();
            //Send previously created user account name : sri
            yield customersPage.searchTxtBoxMsg(data.SearchMsg);
            //validate whether given uer name is present or not
            yield customersPage.validateSearch();
        }));
    });
});
it("customer table sorting validation", () => __awaiter(void 0, void 0, void 0, function* () {
    // await AddcustomerPage.bankmanagerLogin();
    yield customersPage.clickCustomersBtn();
    yield customersPage.sortandVerifyTable();
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
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F5MmF1dG9tYXRpb25CYW5raW5nU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3dheTJhdXRvbWF0aW9uQmFua2luZ1NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQseUVBQXFFO0FBQ3JFLDZEQUEwRDtBQUMxRCxtRUFBZ0U7QUFDaEUsSUFBSSxDQUFDLEdBQUUsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDM0MsSUFBSSxLQUFLLEdBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUMsTUFBTSxlQUFlLEdBQUUsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0FBQ2hELE1BQU0sYUFBYSxHQUFFLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQzNDLE1BQU0sYUFBYSxHQUFFLElBQUksMkJBQVksRUFBRSxDQUFDO0FBQ3hDLFFBQVEsQ0FBQywrQ0FBK0MsRUFBRTtJQUV0RCxTQUFTLENBQUMsR0FBUSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUNoRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7SUFDN0YsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxHQUFRLEVBQUU7UUFDZixrRUFBa0U7UUFDdEUsaUNBQWlDO0lBQ2pDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixVQUFVLENBQUMsR0FBTyxFQUFFO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNwRCw0Q0FBNEM7UUFDNUMsNkZBQTZGO1FBQzdGLDRDQUE0QztJQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsU0FBUyxDQUFDLEdBQUUsRUFBRTtRQUdkLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNGLHVDQUF1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