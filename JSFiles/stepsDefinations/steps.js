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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../pageObjects/calculator");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
let calc = new calculator_1.calculator();
let ah = new angularHomePage_1.angularHomePage();
(0, cucumber_1.Given)('I will navigate to calc site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
}));
(0, cucumber_1.Given)('I will navigate to {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
(0, cucumber_1.When)('I clicked on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ah.angularLink.click();
}));
(0, cucumber_1.When)('you will navigate to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to new page");
}));
(0, cucumber_1.Then)('you will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(2000);
    yield ah.search.sendKeys(string);
}));
(0, cucumber_1.When)('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
(0, cucumber_1.Then)('the output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    yield calc.getResult.getText().then(function (text) {
        console.log(text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwc0RlZmluYXRpb25zL3N0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTJDO0FBQzNDLDJDQUFxQztBQUVyQywwREFBdUQ7QUFDdkQsb0VBQWdFO0FBQ2hFLElBQUksSUFBSSxHQUFFLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFFLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBRTlCLElBQUEsZ0JBQUssRUFBQyw4QkFBOEIsRUFBRSxHQUFPLEVBQUU7SUFDM0Msb0VBQW9FO0lBQ3JFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztBQUVqRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxnQkFBSyxFQUFDLGtDQUFrQyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDeEQsb0VBQW9FO0lBQ3BFLElBQUcsTUFBTSxJQUFFLE1BQU0sRUFDakI7UUFDSSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7S0FFbkU7U0FDSSxJQUFJLE1BQU0sSUFBRSxXQUFXLEVBQzVCO1FBQ0ksTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILElBQUEsZUFBSSxFQUFDLDBCQUEwQixFQUFFLEdBQU8sRUFBRTtJQUN4QyxvRUFBb0U7SUFFcEUsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDRCxJQUFBLGVBQUksRUFBQyxtQ0FBbUMsRUFBRSxHQUFPLEVBQUU7SUFDbkQsb0VBQW9FO0lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxlQUFJLEVBQUMsdUNBQXVDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUM1RCxvRUFBb0U7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxJQUFBLGVBQUksRUFBQyx5Q0FBeUMsRUFBRSxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNwRSxvRUFBb0U7SUFFaEUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWpELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxJQUFBLGVBQUksRUFBQyx5Q0FBeUMsRUFBRSxDQUFNLE1BQU0sRUFBQyxFQUFFO0lBQzNELG9FQUFvRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDM0IsVUFBVSxJQUFJO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQTtBQUVaLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==