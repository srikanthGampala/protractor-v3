import { browser, element,by } from "protractor";

var xl= require('./XLReader.js');

describe('read XL Data', function(){

    var TEST_DATA= xl.read_from_excel('Sheet1','./testData.xlsx');

    TEST_DATA.forEach(function(data){
        it('TC1', function(){
            browser.get('https://angularjs.org/');
            element(by.model('todoList.todoText')).sendKeys(data.userNames);
            element(by.buttonText("add")).click();
            browser.sleep(2000);
            })
    })
    
    })
