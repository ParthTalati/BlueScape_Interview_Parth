const { I, ContactPage, FormSubmittedPage } = inject();


Feature('Contacting BlueScape');

Before(async (I) => {
    I.amOnPage('contact');
});

let incorrectDataSet = new DataTable(['name', 'email', 'website']);
incorrectDataSet.add([' ', 'john@john.com', ' ']);
incorrectDataSet.add(['John', 'john@john', 'https://www.bluescape.com']);
incorrectDataSet.add(['John', 'john@john.com', 'bluescape.com']);

let blankDataSet = new DataTable(['name', 'email', 'website']);
blankDataSet.add([' ', 'john@john.com', 'https://www.bluescape.com'])
blankDataSet.add(['John', '', 'https://www.bluescape.com'])

Scenario('Test Page load', async() => {
    I.seeElement(ContactPage.nameField);

});

Scenario('Positive path', async () => {
   await ContactPage.insertCorrectData();
   I.seeElement(FormSubmittedPage.messageSentText);
});

//scenario('All four fields present in the form', (I) =>{
//    I.see();
//    I.see();
//    I.see();
//    I.see();
//
//});
//
//Data(incorrectDataSet).only.scenario('Incorrect values give error', (I, current) =>{
//    I.amOnPage('/contact')
//    I.fillField('Email', current.email);
//    I.click("Date", "div#contact-form-7");
//    I.click({xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]"});
//    I.click("Submit", "button");
//    I.see('')
//});
//
//scenario('Keeping required fields blank gives error', (I) =>{
//    I.amOnPage('/contact')
//    I.fillField('Email', 'Parth@parth.com');
//    I.click("Date", "div#contact-form-7");
//    I.click({xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]"});
//    I.click("Submit", "button");
//    I.see('')
//});
