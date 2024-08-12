import faker from 'faker';

export class User{
    name:string;
    location:{
        lat:number;
        lng:number;
    };
// AIzaSyDowSjEG4Im1alZ9v8nBkLcyBPsIjJ3x9E
    constructor(){
        this.name = faker.name.firstName("female");
        this.location = {
            lat:faker.address.latitude(90.0,90.0,90),
            lng:faker.address.longitude(90.0,90.0,90)
        };
    }
}