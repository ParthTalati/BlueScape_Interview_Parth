Feature('Contacting BlueScape');

Scenario('Test Page load', (I) => {
    I.amOnPage('/contact/');
    I.see('Send Us a Message');
    I.fillField('Name', 'Parth');
    I.fillField('Email', 'Parth@parth.com');
    I.click("//input[@name='g7-date']");
    I.clickDateOnDatePicker()
});
