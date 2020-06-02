var locator = require('../Util/customlocators.js');
var Objects = require('../Objects/Objects.json');

var WebTablePage = function(){

    this.addNewUser = function(){
    element(by.css(Objects.locators.webtablepage.adduser)).click();
    element(by.css(Objects.locators.webtablepage.firstname)).sendKeys(Objects.userdetails.firstname);
    element(by.css("input[name='LastName']")).sendKeys(Objects.userdetails.firstname);
    element(by.css("input[name='UserName']")).sendKeys(Objects.userdetails.username);
    element(by.css("input[name='Password']")).sendKeys(Objects.userdetails.password);
    element(by.css("input[value= '16']")).click();
    element(by.css("Select[name='RoleId']")).click;
    element(by.cssContainingText('option', "Customer")).click();
    element(by.css("input[name='Email']")).click();
    element(by.css("input[name='Mobilephone']")).sendKeys(Objects.userdetails.phone)
    element(by.ngClick("save(user)")).click()
    };

};
module.exports = new WebTablePage();