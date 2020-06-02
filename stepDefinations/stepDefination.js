var { Given, When, Then, After } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var locator = require('../Util/customlocators.js');
var Objects = require('../Objects/Objects.json');

After(function () {
    let self = this;

    return browser.takeScreenshot()
        .then(function (screenshot) {

            const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png');

        });

});

var base= require('../pages/BasePage.js');
Given('user navigated to application url', function (callback) {
  //  base.go(site);
    browser.get(Objects.testsiteurl).then(callback);
});

var adduserPage = require('../pages/AddUserPage.js');
When('add new user with mandatory details', function () {
    adduserPage.adduser();
    
});


Then('validate the user has been added to the table', function () {

    element(by.repeater("dataRow in displayedCollection").row(0)).getText().then(function (username) {
        console.log("After adding user Result is  :" + username);
    })

});


When('user click on {string} delete icon to delete the record', function (username, callback) {

    let xpath1 = "//td[contains(text(),'";
    let xpath2 = "')]//following::td[8]//button";

    element(by.xpath(xpath1 + username + xpath2)).click();
    element(by.xpath("//*[text()='OK']")).click().then(function () {
        callback();

    });
});

Then('validate {string} has been deleted', function (table) {

});