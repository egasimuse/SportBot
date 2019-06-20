const puppeteer = require('puppeteer');
const BOT_URL = (league) => league;

const self = {

    browser: null,
    page: null,

    initialize: async (league) => {

        self.browser = await puppeteer.launch({
            headless: false
        });
        self.page = await self.browser.newPage();
        await self.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');
        // Go to the page
        await self.page.goto(BOT_URL(league), { waitUntil: 'networkidle2' });

        let cookies = await self.page.cookies();
        await self.page.setCookie(...cookies);
    },

    getResults: async (league) => {
        await self.page.click('ul[id="nav-main"] > li:nth-child(2)');
        await self.page.waitForSelector('ul[id="sb-sportlist"]');
        await self.page.click('ul[id="sb-sportlist"] > li:nth-child(1) > div');
        await self.page.click(`#sb-sportlist > li.td2.on > ul a[href="/events/Soccer/${league}`);
        await self.page.waitForSelector('span[class="st-date"]');
        await self.page.waitForSelector('span[class="st-val"]');
        let elements = await self.page.$$('.st-kickoff');
        let matches = await self.page.$$('.st-event');
        let homeRec = await self.page.$$('.st-home');
        let drawRec = await self.page.$$('.st-draw');
        let awayRec = await self.page.$$('.st-away');
        for ( let i = 0; i < elements.length; i++){
            let date = await (await elements[i].getProperty('innerText')).jsonValue();
            let match = await (await matches[i].getProperty('innerText')).jsonValue();
            let home = await (await homeRec[i].getProperty('innerText')).jsonValue();
            let draw = await (await drawRec[i].getProperty('innerText')).jsonValue();
            let away = await (await awayRec[i].getProperty('innerText')).jsonValue();
            console.log(date + " " + match + ' Home: ' + home + '//' + " Draw: " + draw + '//' + ' Away: ' + away);
            console.log('\n');
            console.log('****************************'); 
            data.push({
                date: date,
                match: match,
                home: home,
                draw: draw,
                away: away,
            });
        }
        return data;
    }
}
module.exports = self;
