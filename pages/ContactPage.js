const {I} = inject();

class ContactPage {
    constructor() {
        this.nameField = 'input[id="g7-name"]';
        this.emailField = 'input[id="g7-email"]';
        this.websiteField = 'input[id="g7-website"]';
        this.dateField = 'input[id="g7-date"]';
        this.todaysDate = { xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]" };
        this.submitButton = 'button[type="submit"]';
    }
    insertCorrectData(name = 'John', email = 'john@john.com', website = 'https://www.google.com') {
        I.amOnPage('contact');
        I.fillField(this.nameField, name);
        I.fillField(this.emailField, email);
        I.click(this.dateField);
        I.click(this.todaysDate);
        I.click("Submit", "button");
    }
}

module.exports = new ContactPage();