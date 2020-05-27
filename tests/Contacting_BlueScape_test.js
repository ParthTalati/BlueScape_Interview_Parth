Feature('Contacting BlueScape');

Scenario('Test Page load', (I) => {
    I.amOnPage('/contact/');
    I.see('Send Us a Message');
    I.fillField('Name', 'Parth');
    I.fillField('Email', 'Parth@parth.com');
    I.click("Date", "div#contact-form-7");
    I.click({xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]"});
    I.click("Submit", "button");

});
