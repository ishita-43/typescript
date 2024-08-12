const profile = {
    name:'ishita',
    age:21,
    cords:{
        latitude:30,
        longitude:33
    },
    setAge(age:number):void{
        this.age =age;
    }
};
// const age =profile.age;
// const {age}:{age:number} = profile;
// const {age,name}:{age:number;name:string}=  profile;
const {cords:{latitude,longitude}}:{cords:{latitude:number; longitude:number}}=profile;
