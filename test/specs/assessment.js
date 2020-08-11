// a basic test
describe('QA interview assessment using seleniumeasy.com demo site', () => {
    it('should have the right title', () => {
        browser.url('https://www.seleniumeasy.com/test/');
        $('.at-cm-no-button').waitForClickable({ timeout: 5000 });
        $('.at-cm-no-button').click();
        expect(browser).toHaveTitle('Selenium Easy - Best Demo website to practice Selenium Webdriver Online');
    })

/*
    For the below URL:
        1. Set the value of id user-message to "QA assessment trial #1"
        2. Click 'Show Message'
        3. Assert that "Your Message" matches "QA assessment trial #1"
*/
    it('should have the right title', () => {
        browser.url('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
        // your test script goes here

    })

/*
    Since we haven't set any before hooks on this test spec the script just
    keeps going from where the previous test left off. Your next test should:
        1. Interact with the menu on the left of the page and click "Input Forms"
        2. On the sub-menu, click "Checkbox Demo"
        3. Under "Multiple Checkbox Demo" there are 2 bugs with the multiple checkbox component
        and it is up to you to figure out what it is and write a test that fails at least 1/2 conditions
        4. Hint: read the bulletpoints to help you find the bug(s)
*/
    it('should nav to checkboxes test', () => {
        // your test script goes here

    })

    it('should test the multiple checkboxes component', () => {
        // your test script goes here

    })

/* 
    In real life we wouldn't waste precious seconds to mouse nav, sorry to make you do that.
    The next test is working with selectors but it would be far too easy to use native selects.
    My final test for you is to work with jquery selects.
        1. For the below URL...
        2. Under the country select Japan & assert the field value is Japan
        3. Under the multi select select Delaware & Vermont & assert the field values
        4. Under US Outlying Territories assert that Guam & United States Minor Outlying Islands are disabled
*/
    it('should set Japan in the country select', () => {
        browser.url('https://www.seleniumeasy.com/test/jquery-dropdown-search-demo.html');
        // your test script goes here
    })

    it('should set multi select field to Delaware & Vermont', () => {
        // your test script goes here
    })

    it('should validate disabled values under US Outlying Territories', () => {
        // your test script goes here
    })
});