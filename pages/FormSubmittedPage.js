const { I } = inject();

class FormSubmittedPage {
    
    constructor() {
        this.messageSentText = {
            xpath: "//h3[contains(text(),'Message Sent')]"
        };
    }
}

module.exports = new FormSubmittedPage();