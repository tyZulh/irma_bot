const puppeteer = require('puppeteer');

const getAll = async () => {
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
  const page = await browser.newPage();

  await page.goto('https://www.20minutes.fr/horoscope/');
  
  const pageData = await page.evaluate(() => {
    return {
      html: document.documentElement.innerHTML,
    };
  });
  return pageData
};

module.exports = getAll