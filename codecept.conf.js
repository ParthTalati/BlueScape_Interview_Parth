const { setHeadlessWhen } = require('@codeceptjs/configure');
require('import-export');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
/* For running tests on multiple browsers, enable this block of code
  multiple: {
    smoke: {
        browsers: ["chrome", "firefox"]
    }
  },*/
  helpers: {
    Puppeteer: {
      url: 'https://bluescapeqainterview.wordpress.com',
      show: true,
      restart: false,
      windowSize: '1000x700',
      waitForNavigation: [ "domcontentloaded", "networkidle0" ],
      waitForAction: 500,
    }
  },
  include: {
    contactPage: './pages/contactPage.js',
    formSubmittedPage: './pages/formSubmittedPage.js'
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