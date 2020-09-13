
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  
  
  
  test('An event element is collapsed by default', async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    page.waitForSelector('.Event');
    let extra = await page.$('.Event .extra');
    expect(extra).toBeNull();
    // jest.setTimeout(10000);
  });

  test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    page.waitForSelector('.Event');
    await page.click('.div_toggleDetails button');

    const extra = await page.$('.Event .extra');
    expect(extra).toBeDefined();
  });


});