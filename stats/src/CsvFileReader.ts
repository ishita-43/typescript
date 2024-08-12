import fs from 'fs';
// import {dateStringToDate} from './utils';
import { matchResults } from './MatchResults';
type MatchData =  [Date, string, string,number,number,matchResults,string];
export abstract  class CsvFileReader{
    data:MatchData[] =[];
    constructor(public filename:string){}
    read():void{
        this.data = fs.readFileSync(this.filename,{
            encoding:'utf-8'
        }).split('/n')
        .map((row:string):string[]=>{
            return row.split(',');
        })
        .map(this.mapRow);
    }
        abstract mapRow(row:string[]):MatchData;
            // return [
            //     dateStringToDate(row[0]),
            //     row[1],
            //     row[2],
            //     parseInt(row[3]),
            //     parseInt(row[4]),
            //     row[5] as matchResults,
            //     row[6]
            // ]
    
}