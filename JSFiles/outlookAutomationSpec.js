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
describe("Auotmate O365", function () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log("Browser started");
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://outlook.office365.com/");
        //await browser.manage().deleteAllCookies();
    }));
    afterEach(() => {
        protractor_1.browser.sleep(2000);
        console.log("Browser closed");
    });
    it(" Outlook login", function () {
        protractor_1.browser.sleep(1000);
        (0, protractor_1.element)(protractor_1.by.name("loginfmt")).sendKeys("srikanth.gampala@sonata-software.com");
        protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.css("#idSIButton9")).click();
        protractor_1.browser.sleep(4000);
        (0, protractor_1.element)(protractor_1.by.xpath("//span[normalize-space()='Sonata Software']")).click();
        protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.name("Password")).sendKeys("Devansh@23");
        protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.xpath("//span[@id='submitButton']")).click();
        protractor_1.browser.sleep(1000);
        //input[@id='KmsiCheckboxField']
        //span[@id='submitButton']
        (0, protractor_1.element)(protractor_1.by.id("idSIButton9")).click();
        // browser.sleep(1000);
        protractor_1.browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.xpath("//div[@id='AgAAAAAAAQACAAAAAVQTTwAAAAA=']")).click();
        protractor_1.browser.sleep(2000);
        // element(by.css("#id__7")).click();
        // browser.sleep(2000);
        (0, protractor_1.element)(protractor_1.by.xpath("//button[@id='read_ellipses_menu']")).click();
        protractor_1.browser.sleep(2000);
        // element(by.xpath("//input[@aria-label='To']")).sendKeys("g3.srikanth@gmail.com;");
        // browser.sleep(2000);
        // element(by.css("#TextField212")).sendKeys("order 9999");
        // browser.sleep(2000);
        // element(by.css("button[name='Send']")).click();
        // browser.sleep(2000);
        //.ms-Icon.root-90.css-157.ms-Button-icon._3elxfLs8GcU_Dugz30Zho0.icon-171[data-icon-name='More']
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bG9va0F1dG9tYXRpb25TcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vb3V0bG9va0F1dG9tYXRpb25TcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBS2xELFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDdEIsVUFBVSxDQUFDLEdBQU8sRUFBRTtRQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtRQUNuRCw0Q0FBNEM7SUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLFNBQVMsQ0FBQyxHQUFFLEVBQUU7UUFFVixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFFakIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUM5RSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6RSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsZ0NBQWdDO1FBQ2hDLDBCQUEwQjtRQUMxQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLHVCQUF1QjtRQUN2QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIscUNBQXFDO1FBQ3JDLHVCQUF1QjtRQUN2QixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDaEUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHcEIscUZBQXFGO1FBQ3JGLHVCQUF1QjtRQUN2QiwyREFBMkQ7UUFDM0QsdUJBQXVCO1FBQ3ZCLGtEQUFrRDtRQUNsRCx1QkFBdUI7UUFDdkIsaUdBQWlHO0lBS3JHLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==