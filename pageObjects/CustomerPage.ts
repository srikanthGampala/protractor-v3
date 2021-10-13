import { element, ElementFinder , by, ElementArrayFinder, browser } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";
import { log4jsconfig } from "../config/log4jsconfig";
export class CustomerPage extends commonFunctions{

    //Banking page elments
    
    private CustomersBtn: ElementFinder= element(by.buttonText("Customers"));
    private SearchTxtBox: ElementFinder= element(by.model("searchCustomer"));
    private serachuserName: ElementFinder= element(by.css("tbody td:nth-child(1)"));
    private mytable: ElementArrayFinder= element.all(by.css('tbody'));
    private allrows: ElementArrayFinder= this.mytable.$$("tr")
    //private clickonTableFirstColumn:ElementFinder= element(by.xpath("//thead//td[1]"));
    //public  sortedData: any;
    // Banking page methods starts
    

    // 
    public async clickCustomersBtn()
    {
        this.click(this.CustomersBtn);
    }

    async searchTxtBoxMsg(SearchMsg: string){
        
    {
        await this.clearAndType(this.SearchTxtBox, SearchMsg);
    }
    }
    

    async validateSearch(){
        let text= await this.serachuserName;
        this.assertText(await text.getText(), "sri" )
        console.log ("Title:" + await text.getText() + " is validated successfully"); 
        
    }   
    async sortandVerifyTable(){

        let myData= this.allrows.map(async(ele, index)=>{
            let data= ele.$$("td").get(0);
            return await data.getText();
        });
        let sortedData: any[]= (await myData).sort().reverse();
        console.log("After sorting and reverse the array:" + sortedData);
        // await browser.sleep(1000);
        // element(by.xpath("//thead//td[1]")).click();
        // let aftersortedData= await this.allrows.map(async(ele, index)=>{
        //     let data= ele.$$("td").get(0);
        //     return await data.getText();
        
        // });
        // console.log("after ele sort click: " +  aftersortedData);
        // expect(sortedData).toEqual(aftersortedData);
        
    }
}
    



