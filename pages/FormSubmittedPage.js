scenario('Keeping Name blank gives error', (I) =>{
    I.amOnPage('/contact')
    I.fillField('Email', 'Parth@parth.com');
    I.click("Date", "div#contact-form-7");
    I.click({xpath: "//table[@class='ui-datepicker-calendar']//a[contains(@class,'ui-state-highlight')]"});
    I.click("Submit", "button");
    I.see('')
});