const { setHeadlessWhen } = require('@codeceptjs/configure');

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
      waitForNavigation: 'domcontentloaded',
      waitForAction: 500,
    }
  },
  include: {
    I: './steps_file.js'
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