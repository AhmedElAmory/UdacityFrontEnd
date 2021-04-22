import {checkForName} from '../src/client/js/nameChecker'

describe("Testing to make sure input is a URL",()=>{
    test("Testing the checkForName() function", ()=>{
        //testing that url input make it true
        expect(checkForName("https://www.thenationalnews.com/middleeastnorthafrica?utm_source=boopin&utm_medium=search&utm_campaign=clicks&gclid=Cj0KCQjwi7yCBhDJARIsAMWFScNVYikRQRQIgy4CGaKbYyd-InBXzlrbDTKGr-lAkh0c3CaFYsNwFoYaAnaxEALw_wcB")).toBe(true);
        //testing that not url make it false
       expect(checkForName("Name Example not URL")).toBe(false);
        })})
        

