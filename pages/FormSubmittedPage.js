const { I } = inject();

class FormSubmittedPage {
    
    constructor() {
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
    clickGoBackUrl() {
        I.click(this.goBackUrl);
    }
}

module.exports = new FormSubmittedPage();