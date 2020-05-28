Feature('Contacting BlueScape');

Before(async (I) => {
    I.amOnPage('/contact/');
});

Scenario('Test Page load', (I, contactPage) => {
    I.seeElement(contactPage.nameField);

});

Scenario('Positive path', (I, contactPage, formSubmittedPage) => {
    contactPage.insertCorrectData();
    I.seeElement(formSubmittedPage.messageSentText)

});
//
//scenario('All four fields present in the form', (I) =>{
//    I.see();
//    I.see();
//    I.see();
//    I.see();
//
//});
//
//scenario('Keeping any of required fields blank gives error', (I) =>{
//    I.amOnPage('/contact')
//    I.fillField('Email', 'Parth@parth.com');
//    I.click("Date", "div#contact-form-7");
//    I.click({xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]"});
//    I.click("Submit", "button");
//    I.see('')
//});
//
//scenario('Incorrect email address format gives error', (I) =>{
//    I.amOnPage('/contact')
//    I.fillField('Email', 'Parth@parth.com');
//    I.click("Date", "div#contact-form-7");
//    I.click({xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]"});
//    I.click("Submit", "button");
//    I.see('')
//});
