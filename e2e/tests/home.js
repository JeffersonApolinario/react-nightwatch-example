module.exports = {
    'Test initial create app' : function (browser) {
        browser.init().url(this.launchUrl)
        const home = browser.page.home()    
        home.load()
        browser.end()
    }
};