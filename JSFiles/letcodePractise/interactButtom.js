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
describe('interact with buttons', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://letcode.in/button');
    }));
    it('Protractor specific locator', () => __awaiter(void 0, void 0, void 0, function* () {
        let text = yield (0, protractor_1.element)(protractor_1.by.buttonText('Goto Home')).getText();
        console.log(text);
    }));
    it('Get Position', () => __awaiter(void 0, void 0, void 0, function* () {
        let location = yield (0, protractor_1.element)(protractor_1.by.id('#button2')).getLocation();
        console.log(location.x);
        console.log(location.y);
        //op as .345.600061035156
        // y coordinates as 366
        it('Get color of button', () => __awaiter(void 0, void 0, void 0, function* () {
            let size = yield (0, protractor_1.element)(protractor_1.by.buttonText('Submit Button')).getSize();
            console.log(size.height);
            console.log(size.width);
            //o/p 38 and 158
        }));
        it('Find the height and width ', () => __awaiter(void 0, void 0, void 0, function* () {
            let buttonColor = yield (0, protractor_1.$)('.btn.btn-primary').getCssValue('background-color');
            console.log(buttonColor);
            //op rgb(0,123,255,1)
        }));
        // it('Apeend and Tab ', async()=>{
        //     element(by.id("john")).senconsole.log(buttonColor);
        //     //op rgb(0,123,255,1)
        // })
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RCdXR0b20uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sZXRjb2RlUHJhY3Rpc2UvaW50ZXJhY3RCdXR0b20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBOEQ7QUFFOUQsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUUsRUFBRTtJQUNsQyxTQUFTLENBQUMsR0FBTyxFQUFFO1FBQ2YsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0lBQ2xELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBUSxFQUFFO1FBQ3hDLElBQUksSUFBSSxHQUFFLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsY0FBYyxFQUFFLEdBQVEsRUFBRTtRQUN6QixJQUFJLFFBQVEsR0FBRSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUMzQixFQUFFLENBQUMscUJBQXFCLEVBQUUsR0FBTyxFQUFFO1lBQy9CLElBQUksSUFBSSxHQUFFLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN2QixnQkFBZ0I7UUFDcEIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFPLEVBQUU7WUFDdEMsSUFBSSxXQUFXLEdBQUUsTUFBTSxJQUFBLGNBQUMsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIscUJBQXFCO1FBQ3pCLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDRixtQ0FBbUM7UUFDbkMsMERBQTBEO1FBQzFELDRCQUE0QjtRQUM1QixLQUFLO0lBQ1QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQyxDQUFBIn0=