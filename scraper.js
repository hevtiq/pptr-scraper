/**
 * Web scraper
 *
 * - use node loop over random user agent, to avoid detect and block by page
 */
const puppeteer = require('puppeteer');
const { url } = require('./config');

// ;()();
;(async () => {
    // open browser
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // setup browser
    await page.setDefaultTimeout(10000);  // timeout 10s
    await page.setViewport({ width: 1200, height: 800});

    // close browser
    await browser.close();
})()
.catch(error => {
    console.log(error);  // log error
    process.exit(1);  // kill process
});