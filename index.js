const bot = require('./oddsring');
const league = [
    '281474976711241-European-Championship-U21',
    '281474976710937-Finland-Kakkonen-Group-A',
    '281474976710938-Finland-Kakkonen-Group-B',
    '281474976710939-Finland-Kakkonen-Group-C',
];

(async () => {
    await bot.initialize('https://www.oddsring.com/');
    for ( let i = 0; i < league.length; i++){
        console.log('********************************' + league[i] + "*****************************");
        console.log("\n");
        let results = await bot.getResults(league[i]);
        
    }  
})();







// const puppeteer = require('puppeteer');

// (async () => {
//     let url = 'https://www.oddsring.com/events/Soccer/281474976710876-African-Cup-of-Nations';
//     let browser = await puppeteer.launch();
//     let page = await browser.newPage();

//     await page.goto(url, { waitUntil: 'networkidle2'});

//     let data = await page.evaluate( () => {
//         const dates = Array.from(document.querySelectorAll('.st-date'), element => element.innerText);
//         console.log(element);
//         // for (let i = 0; i < dates.length; i++){
//         //     const date = await (await dates[i].getProperty('innerText'))
//         // }
        
//     });
//     console.log(data);
//     debugger;
//     // await browser.close();
//     // let movieUrl = 'https://www.imdb.com/title/tt1979376/?ref_=inth_ov_i';
//     // let browser = await puppeteer.launch();
//     // let page = await browser.newPage();

//     // await page.goto(movieUrl, { waitUntil: 'networkidle2'});

//     // let data = await page.evaluate( () => {
//     //     let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
//     //     let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
//     //     let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;
//     //     return {
//     //         title,
//     //         rating,
//     //         ratingCount
//     //     }
//     // });
//     // console.log(data);
//     // debugger;
//     // await browser.close();
// })();