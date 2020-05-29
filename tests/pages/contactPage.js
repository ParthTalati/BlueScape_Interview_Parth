const I = inject();

module.exports = {

    // locators on contact page
    nameField: 'input[id="g7-name"]',
    emailField: 'input[id="g7-email"]',
    websiteField: 'input[id="g7-website"]',
    dateField: 'input[id="g7-date"]',
    todaysDate: {xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]"},
    submitButton: 'button[type="submit"]',

    //method to return correct dataset for all fields
    insertCorrectData(name = 'John',email = 'john@john.com',website = 'https://www.google.com') {
        I.amOnPage('contact');
        I.fillField(this.nameField, name);
        I.fillField(this.emailField, email);
        I.click(this.dateField);
        I.click(this.todaysDate);
        I.click("Submit", "button");
        I.wait(1);
}

    //method for incorrect email address format

    //method for incorrect url


    //method for special characters in Name field


};