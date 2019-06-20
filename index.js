const bot = require('./oddsring');
const fs = require('fs');
const league = [
    '281474976710874-Americas-Copa-America',
    '281474976710937-Finland-Kakkonen-Group-A',
    '281474976710938-Finland-Kakkonen-Group-B',
    '281474976710939-Finland-Kakkonen-Group-C',
];

(async () => {
    await bot.initialize('https://www.oddsring.com/');
    const allBotData = [];
    for ( let i = 0; i < league.length; i++){
        console.log('********************************' + league[i] + "*****************************");
        console.log("\n");
        let results = await bot.getResults(league[i]);
        allBotData.push(results);
    }
    fs.writeFile(
        './json/result.json',
        JSON.stringify(allBotData, null, 2),
        (err) => err ? console.log('Data not written: ', err) : console.log('Data written')
    );  
})();


