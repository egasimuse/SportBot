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


