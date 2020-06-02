var Objects = require('../Objects/Objects.json');


module.exports = {

    
elementsAddUserPage:
{
    adduserButton: element(by.css(Objects.locators.webtablepage.adduser)),
    firstname:element(by.css(Objects.locators.webtablepage.firstname)),
    lastname:element(by.css("input[name='LastName']")),
    username:element(by.css("input[name='UserName']")),
    password: element(by.css("input[name='Password']")),
    inputbox:element(by.css("input[value= '16']")),
    role:element(by.css("Select[name='RoleId']")),
    customer:element(by.cssContainingText('option', "Customer")),
    email:element(by.css("input[name='Email']")),
    mobile:element(by.css("input[name='Mobilephone']"))
    


},


    adduser: function()  {
         this.elementsAddUserPage.then(function (element) {
            element.adduserButton.click();
            element.firstname.sendKeys(Objects.userdetails.firstname);
            element.lastname.sendKeys(Objects.userdetails.firstname);
            element.username.sendKeys(Objects.userdetails.username);
            element.password.sendKeys(Objects.userdetails.password);
            element.inputbox.click();
            element.role.click;
            element.customer.click();
            element.email.sendKeys("dddd@gmail.com");
            element.mobile.sendKeys(Objects.userdetails.phone);
    
        });
        
    }
    


   
};