class ArrayOfNumbers{
    constructor(public collections: number[]){
        
    }
    get(index:number):number{
        return this.collections[index];
    }
}

class ArrayOfString{
    constructor(public collections: string[]){}

    get(index:number):string{
        return this.collections[index];
    }
}

class ArrayOfAnything<T>{
    constructor(public collections:T[]){}
    get(index:number):T{
        return  this.collections[index];
    }
}

// new ArrayOfAnything<string>(['a','b','c']);
const arr = new ArrayOfAnything(['a']);

// Examples of generic with functions
function printStrings(arr:string[]):void{
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
function printNumbers(arr:number[]):void{
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
function printAnything<T>(arr:T[]):void{
    for(let i =0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printAnything<string>(['a','b']);

// Generic constraints
class Car{
    print(){
        console.log('I am car');
    }
}

class House{
    print(){
        console.log('I am a house');
    }
}

interface Printable{
    print():void;
}

function printHouseOrCars<T extends Printable>(arr:T[]){
    for(let i =0;i<arr.length;i++){
        arr[i].print();
    }
}

printHouseOrCars<House>([new House(), new House()]);
printHouseOrCars<Car>([new Car(), new Car());