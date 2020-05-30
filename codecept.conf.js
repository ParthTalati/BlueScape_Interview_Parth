exports.config = {
  tests: './tests/*.test.js',
  output: './output',
  helpers: {
    Puppeteer: { // Playwrite for cross-browser testing
      url: 'https://bluescapeqainterview.wordpress.com/',
      show: true,
      restart: false,
      windowSize: '1000x800',
      waitForNavigation: [ "domcontentloaded", "networkidle0" ],
      waitForAction: 500,
      waitForTimeout: 3000,
    }
  },
  include: {
    ContactPage: './pages/ContactPage.js',
    FormSubmittedPage: './pages/FormSubmittedPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'BlueScape_Interview_Parth',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}