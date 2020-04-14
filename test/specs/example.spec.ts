describe('webdriver.io page', function () {
    it('can register', function () {
        browser.url('https://webdriver.io/')
        const elem = $('.tagline')
        expect(elem).toHaveText('Next-gen browser automation test framework for Node.jt')
    })
})