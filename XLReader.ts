var XLSX= require('xlsx');

class XLReader{
    read_from_excel(sheetName,filepath){
        var workbook = XLSX.readFile(filepath);
        var worksheet = workbook.Sheets[sheetName];
        var a= XLSX.utils.sheet_to_json(worksheet);
    }

}
module.exports= new XLReader();