const { I, ContactPage, FormSubmittedPage } = inject();

Feature('Form submitted successfully');

Before(async (I) => {
    ContactPage.insertCorrectData();
});

Scenario('Message sent is visible', async() => {
    I.seeElement(FormSubmittedPage.messageSentText);

});

Scenario('Go back button is available', () => {
    I.seeElement(FormSubmittedPage.goBackUrl);

});

Scenario('Website URL is clickable if provided',async () => {
    if (I.seeElement(FormSubmittedPage.websiteSubmitted)) {
        let webURL = await I.grabHTMLFrom(FormSubmittedPage.websiteSubmitted);
        console.log(webURL);
        I.clickLink(FormSubmittedPage.websiteSubmitted);
        I.seeInCurrentUrl(webURL);
    }

});

Scenario('Clicking go back loads /contact page',async () => {
    FormSubmittedPage.clickGoBackUrl();
    I.seeElementInDOM(ContactPage.nameField);
});