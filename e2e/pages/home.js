const homeCommands = {
    load: function() {
        return this.navigate()
                .waitForElementVisible('@mainParagraph', 'Edit src/App.js and save to reload.')
                .waitForElementVisible('@mainLink', 'Learn React')
    }
}

module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    commands: [homeCommands],
    elements: {
        mainLink: { selector: '.App-link'},
        mainParagraph: { selector: 'p' }
    }
}