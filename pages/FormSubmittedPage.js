const { I } = inject();

class FormSubmittedPage {
    
    constructor() {

        // Locators for FormSubmitted page
        this.messageSentText = {
            xpath: "//h3[contains(text(),'Message Sent')]"
        };
        this.nameSubmitted = {
            xpath: "//p[contains(text(),'Name:')]"
        };
        this.emailSubmitted = {
            xpath: "//p[contains(text(),'Email:')]"
        };
        this.websiteSubmitted = {
            xpath: "//p[contains(text(),'Website')]/a"
        };
        this.goBackUrl = {
            xpath: "//h3/a"
        };

    }

    //This method clicks go back url on the page
    clickGoBackUrl() {
        I.click(this.goBackUrl);
    }
}

module.exports = new FormSubmittedPage();