const {I} = inject();

class ContactPage {
    
    constructor() {
        // Locators on the contact page
        this.nameField = 'input[id="g7-name"]';
        this.emailField = 'input[id="g7-email"]';
        this.websiteField = 'input[id="g7-website"]';
        this.dateField = 'input[id="g7-date"]';
        this.todaysDate = { 
            xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]" 
        };
        this.submitButton = 'button[type="submit"]';
        this.instagramButton = { 
            xpath: "//li[contains(@class,'wp-social-link-instagram')]" 
        };
    }
    // Function to insert the data in the fields, with default values assigned
    insertCorrectData(name = 'John', email = 'john@john.com', website = 'https://www.google.com') {
        I.amOnPage('contact');
        I.fillField(this.nameField, name);
        I.fillField(this.emailField, email);
        I.fillField(this.websiteField, website);
        I.click(this.dateField);
        I.click(this.todaysDate);
        I.click("Submit", "button");
    }
    // Function to click on Instagram svg image under social media section
    clickInstagramButton(){
        I.click(this.instagramButton);
    }

}

module.exports = new ContactPage();