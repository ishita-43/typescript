import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { matchResults } from "./MatchResults";


export class MatchReader extends CsvFileReader{
    mapRow(row:string[]):MatchData{
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResults,
            row[6]
        ]
    };

}