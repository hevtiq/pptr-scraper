/**
 * Web scraper
 *
 * - use node loop over random user agent, to avoid detect and block by page
 */
const puppeteer = require('puppeteer');
const random_useragent = require('random-useragent');
const { url } = require('./config');

// ;()();
;(async () => {
    // open browser
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // setup browser
    await page.setDefaultTimeout(10000);  // timeout 10s
    await page.setViewport({ width: 1200, height: 800});
    await page.setUserAgent(random_useragent.getRandom());

    // close browser
    await browser.close();
})()
.catch(error => {
    console.log(error);  // log error
    process.exit(1);  // kill process
});