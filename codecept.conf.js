const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
//  multiple: {
//    smoke: {
//        browsers: ["chrome", "firefox"]
//    }
//  },
  helpers: {
    Puppeteer: {
      url: 'https://bluescapeqainterview.wordpress.com',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: 'networkidle0'
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