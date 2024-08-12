import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { matchResults } from './MatchResults';

const reader = new CsvFileReader('football.csv');
reader.read();
// console.log("hi there");
// const matches = fs.readFileSync('football.csv',{
//     encoding:'utf-8'
// }).split('/n')
// .map((row:string):string[]=>{
//     return row.split(',');
// });
//enum
// enum matchResults  {
//     HomeWin ='H',
//     AwayWin= 'A',
//     Draw='D'
// };
const homeWin='H';
const awayWin='A';
const draw='D';

let manUnitedWins =0;

for(let match of reader.data){
    if(match[1]==='Man United' && match[5] === matchResults.HomeWin)
        manUnitedWins++;
    else{
        if(match[2]==='Man United' && match[6]==='A') manUnitedWins++;
    }  
}
console.log(`man united wins ${manUnitedWins} games`);
// load csv using nodejs npm install @types/node --> npm start
