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
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // setup browser
    await page.setDefaultTimeout(10000);  // timeout 10s
    await page.setViewport({ width: 1200, height: 800});
    await page.setUserAgent(random_useragent.getRandom());

    // get data from books
    const name_selector = ".product_main > h1";
    const price_selector = ".price_color";
    await page.goto(url);
    await page.waitForSelector(name_selector);
    await page.waitForSelector(price_selector);
    const name = await page.$eval(name_selector, e => e.innerHTML);
    const price = await page.$eval(price_selector, e => e.innerHTML);
    const nameTrim = name.trim();
    const priceTrim = price.trim();

    console.log({nameTrim, priceTrim});

    // close browser
    await browser.close();
})()
.catch(error => {
    console.log(error);  // log error
    process.exit(1);  // kill process
});