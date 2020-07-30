describe('seleniumeasy.com page', () => {
    it('should have the right title', () => {
        browser.url('https://www.seleniumeasy.com/test/')
        expect(browser).toHaveTitle('Selenium Easy - Best Demo website to practice Selenium Webdriver Online');
    })
})
