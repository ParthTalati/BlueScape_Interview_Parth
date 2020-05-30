const { I, ContactPage, FormSubmittedPage } = inject();


Feature('Contacting BlueScape');

Before(async (I) => {
    I.amOnPage('contact');
});

// Incorrect data sets to test same scenario with multiple invalid input sets
let incorrectDataSet = new DataTable(['name', 'email', 'website']);
incorrectDataSet.add([' ', 'john@john.com', ' ']);
incorrectDataSet.add(['John', 'john@john', 'https://www.bluescape.com']);
incorrectDataSet.add(['John', 'john@john.com', 'Bluescape']);

// Blank data set to test required fields can not be blank
let blankDataSet = new DataTable(['name', 'email', 'website']);
blankDataSet.add([' ', 'john@john.com', 'https://www.bluescape.com'])
blankDataSet.add(['John', '', 'https://www.bluescape.com'])

Scenario('Test Page loads correctly', async() => {
    I.seeElement(ContactPage.nameField);

});

Scenario('All four form fields are present', async () => {
    I.seeElement(ContactPage.nameField);
    I.seeElement(ContactPage.emailField);
    I.seeElement(ContactPage.websiteField);
    I.seeElement(ContactPage.dateField);

});
 
Scenario('Instagram button redirects to correct page', async() => {
    await ContactPage.clickInstagramButton();
    I.seeInCurrentUrl('instagram.com');

});

Scenario('Form submission with all correct information redirects to submitted page', async () => {
   await ContactPage.insertCorrectData();
   I.seeElement(FormSubmittedPage.messageSentText);

});

/*
This test:
Tests: Blnak name (Only invalid value), Incorrect email, Incorrect website link
Returns: The submission state (allowed/not-allowed)
 */
Data(incorrectDataSet).Scenario('Incorrect values for fields do not allow submission', (I, current) =>{
    ContactPage.insertCorrectData(name = current.name, email = current.email, website = current.website);
    I.dontSee(FormSubmittedPage.messageSentText);
 
 });

Data(blankDataSet).Scenario('Blank values for required fields do not allow submission', (I, current) =>{
   ContactPage.insertCorrectData(name = current.name, email = current.email, website = current.website);
   I.dontSee(FormSubmittedPage.messageSentText);

});

