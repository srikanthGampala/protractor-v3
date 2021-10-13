"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var xl = require('./XLReader.js');
describe('read XL Data', function () {
    var TEST_DATA = xl.read_from_excel('Sheet1', './testData.xlsx');
    TEST_DATA.forEach(function (data) {
        it('TC1', function () {
            protractor_1.browser.get('https://angularjs.org/');
            (0, protractor_1.element)(protractor_1.by.model('todoList.todoText')).sendKeys(data.userNames);
            (0, protractor_1.element)(protractor_1.by.buttonText("add")).click();
            protractor_1.browser.sleep(2000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWxSZWFkU3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2V4Y2VsUmVhZFNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUQ7QUFFakQsSUFBSSxFQUFFLEdBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRWpDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFckIsSUFBSSxTQUFTLEdBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUU5RCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsSUFBSTtRQUMzQixFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ04sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0QyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQyxDQUFDLENBQUE7QUFFRixDQUFDLENBQUMsQ0FBQSJ9