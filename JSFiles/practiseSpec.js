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
const ptor_1 = require("protractor/built/ptor");
describe('Interact with tables', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://letcode.in/selectable');
    }));
    it('table', () => __awaiter(void 0, void 0, void 0, function* () {
        //element(by.id)
        let Columns = (0, protractor_1.$$)('tbody tr td:nth-child(1)');
        let count = yield Columns.count();
        console.log(count);
        for (let i = 0; i < count; i++) {
            let columndata = yield Columns.get(i).getText();
            console.log(columndata);
        }
        //console.log(location.y);
    }));
    xit('Button color', () => __awaiter(void 0, void 0, void 0, function* () {
        //element(by.id)
        let color = yield (0, protractor_1.$)('.btn.btn-primary').getCssValue('background-color');
        console.log(color);
        //o/p-- .rgba(0,123,255,1)
    }));
    xit('Find the height and width', () => __awaiter(void 0, void 0, void 0, function* () {
        //element(by.id)
        let size = yield (0, protractor_1.element)(protractor_1.by.buttonText('Submit Button')).getSize();
        console.log(size.height);
        console.log(size.width);
        //o/p-- .rgba(0,123,255,1)
    }));
    it('Multi Select', () => __awaiter(void 0, void 0, void 0, function* () {
        //element(by.id)
        let allItems = yield protractor_1.element.all(protractor_1.by.id("selectable"));
        let selelnium = yield protractor_1.element.all(protractor_1.by.id("selectable")).get(0);
        let Appium = protractor_1.element.all(protractor_1.by.id("selectable")).get(2);
        protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.CONTROL)
            .click(yield selelnium.getWebElement())
            .click(yield Appium.getWebElement())
            .perform();
        //o/p-- .rgba(0,123,255,1)
    }));
    it('letcode sortable', () => __awaiter(void 0, void 0, void 0, function* () {
        //element(by.id)
        let allItems = yield protractor_1.element.all(protractor_1.by.id("selectable"));
        let selelnium = yield protractor_1.element.all(protractor_1.by.id("selectable")).get(0);
        let Appium = protractor_1.element.all(protractor_1.by.id("selectable")).get(2);
        protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.CONTROL)
            .click(yield selelnium.getWebElement())
            .click(yield Appium.getWebElement())
            .perform();
        //o/p-- .rgba(0,123,255,1)
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJhY3Rpc2VTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHJhY3Rpc2VTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdEO0FBRXhELGdEQUFrRDtBQUVsRCxRQUFRLENBQUMsc0JBQXNCLEVBQUMsR0FBRSxFQUFFO0lBQ2hDLFNBQVMsQ0FBQyxHQUFPLEVBQUU7UUFDZixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7SUFDdEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNOLEVBQUUsQ0FBRSxPQUFPLEVBQUUsR0FBTyxFQUFFO1FBQ2xCLGdCQUFnQjtRQUNqQixJQUFJLE9BQU8sR0FBRSxJQUFBLGVBQUUsRUFBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQzNDLElBQUksS0FBSyxHQUFFLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQztZQUN4QixJQUFJLFVBQVUsR0FBRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUMxQjtRQUNELDBCQUEwQjtJQUU3QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFFLGNBQWMsRUFBRSxHQUFPLEVBQUU7UUFDMUIsZ0JBQWdCO1FBQ2pCLElBQUksS0FBSyxHQUFFLE1BQU0sSUFBQSxjQUFDLEVBQUMsa0JBQWtCLENBQUMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLDBCQUEwQjtJQUU3QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFFLDJCQUEyQixFQUFFLEdBQU8sRUFBRTtRQUN2QyxnQkFBZ0I7UUFDakIsSUFBSSxJQUFJLEdBQUMsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRXhCLDBCQUEwQjtJQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFFLGNBQWMsRUFBRSxHQUFPLEVBQUU7UUFDekIsZ0JBQWdCO1FBQ2pCLElBQUksUUFBUSxHQUFFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksU0FBUyxHQUFFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLE1BQU0sR0FBRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNqRCxLQUFLLENBQUMsTUFBTSxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEMsS0FBSyxDQUFDLE1BQU0sTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ25DLE9BQU8sRUFBRSxDQUFBO1FBRVYsMEJBQTBCO0lBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUUsa0JBQWtCLEVBQUUsR0FBTyxFQUFFO1FBQzdCLGdCQUFnQjtRQUNqQixJQUFJLFFBQVEsR0FBRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLFNBQVMsR0FBRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxNQUFNLEdBQUUsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDakQsS0FBSyxDQUFDLE1BQU0sU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RDLEtBQUssQ0FBQyxNQUFNLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNuQyxPQUFPLEVBQUUsQ0FBQTtRQUVWLDBCQUEwQjtJQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBSUgsQ0FBQyxDQUFDLENBQUEifQ==