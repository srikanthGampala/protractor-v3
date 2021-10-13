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
describe('Interact with tables', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('https://jqueryui.com/resizable/');
    }));
    xit('Draggable', () => __awaiter(void 0, void 0, void 0, function* () {
        //element(by.id)
        yield protractor_1.browser.switchTo().frame(0);
        let src = (0, protractor_1.$)("#draggable");
        let locationX = (yield src.getLocation()).x;
        let locationY = (yield src.getLocation()).y;
        yield protractor_1.browser.actions().dragAndDrop(yield src.getWebElement(), {
            x: locationX + 50,
            y: locationY + 70
        }).perform();
        //console.log(location.y);
    }));
    xit('Drag and drop', () => __awaiter(void 0, void 0, void 0, function* () {
        //element(by.id)
        yield protractor_1.browser.switchTo().frame(0);
        let src = (0, protractor_1.$)("#draggable");
        let des = (0, protractor_1.$)("#droppable");
        yield protractor_1.browser.actions().dragAndDrop(yield src, yield des).perform();
        protractor_1.browser.sleep(5000);
        //console.log(location.y);
    }));
    it('Resizable', () => __awaiter(void 0, void 0, void 0, function* () {
        //element(by.id)
        yield protractor_1.browser.switchTo().frame(0);
        let src = (0, protractor_1.$)(".ui-resizable-handle.ui-resizable-se.ui-icon.ui-icon-gripsmall-diagonal-se");
        //let des= $("#droppable");
        let locationX = (yield src.getLocation()).x;
        let locationY = (yield src.getLocation()).y;
        yield protractor_1.browser.actions().dragAndDrop(yield src.getWebElement(), {
            x: locationX + 30,
            y: locationY + 50
        }).perform();
        protractor_1.browser.sleep(5000);
        //console.log(location.y);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ2FuZGRyb3BTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vRHJhZ2FuZGRyb3BTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdEO0FBRXhELFFBQVEsQ0FBQyxzQkFBc0IsRUFBQyxHQUFFLEVBQUU7SUFDaEMsU0FBUyxDQUFDLEdBQU8sRUFBRTtRQUNmLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7SUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNOLEdBQUcsQ0FBRSxXQUFXLEVBQUUsR0FBTyxFQUFFO1FBQ3ZCLGdCQUFnQjtRQUNoQixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxHQUFFLElBQUEsY0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3hCLElBQUksU0FBUyxHQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxTQUFTLEdBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUMvQixNQUFNLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFDekI7WUFDSSxDQUFDLEVBQUUsU0FBUyxHQUFHLEVBQUU7WUFDakIsQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFO1NBQ25CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUVqQiwwQkFBMEI7SUFFN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEdBQUcsQ0FBRSxlQUFlLEVBQUUsR0FBTyxFQUFFO1FBQzNCLGdCQUFnQjtRQUNoQixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxHQUFFLElBQUEsY0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pCLElBQUksR0FBRyxHQUFFLElBQUEsY0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQ25DLE1BQU0sR0FBRyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckIsMEJBQTBCO0lBRTdCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUUsV0FBVyxFQUFFLEdBQU8sRUFBRTtRQUN0QixnQkFBZ0I7UUFDaEIsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsR0FBRSxJQUFBLGNBQUMsRUFBQyw0RUFBNEUsQ0FBQyxDQUFDO1FBQ3pGLDJCQUEyQjtRQUUzQixJQUFJLFNBQVMsR0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksU0FBUyxHQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FDbEMsTUFBTSxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQ3pCO1lBQ0ksQ0FBQyxFQUFFLFNBQVMsR0FBRyxFQUFFO1lBQ2pCLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRTtTQUNuQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFYixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQiwwQkFBMEI7SUFFN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQyxDQUFBIn0=