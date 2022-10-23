const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const { getSign } = require('./helper')


const getAll = async () => {
  const scraped_horoscops = {};
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
  const page = await browser.newPage();

  await page.goto('https://www.20minutes.fr/horoscope/');
  
  const pageData = await page.evaluate(() => {
    return {
      html: document.documentElement.innerHTML,
    };
  });
  
  const $ = cheerio.load(pageData.html);
  
  const horoscop_cards = $('li.mb5');
  horoscop_cards.each((index, element) => {
    const horoscop = []
    
    $(element).find('p.mb2').each((i,item) => {
      _horoscop.push($(item).text());
    })
    scraped_horoscops[getSign($(element).find('h2').text().toLowerCase())] = {
      love: horoscop[0],
      money: horoscop[1]
    }
  });
  await browser.close();
  return scraped_horoscops;
};

module.exports = getAll