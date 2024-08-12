let apples:number = 5;
let speed:string = "fast";
let hasName:boolean = false;
let hasValue:null = null;
let nothing:undefined = undefined;
let today:Date = new Date();
// Array
let colors:string[]=['red','yellow','orange','pink','green','blue','violet','brown','black','white'];

let mynum:number[] = [1,2,3,4];
let bool:boolean[] = [true,false];
// object literal annotation
let point: {x:number; y:number}  = {
    x:20,
    y:10
};
// function with annotations
let ab:(i:number) =>void = (i:number)=>{

};

// when to use annotation
// function return any

const json = '{"x":10,"y":20}';
const coordinates:{x:number; y:number} = JSON.parse(json);
console.log(coordinates);

let words = ["red","green","blue"];
let  foundWord = false;
for(let i=0;i<=words.length;i++){
    if(words[i] == "green"){
        foundWord = true;
    }
}

let numbers = [-10,3,100];
let numbersAboveZero:boolean | number = false;
for(let i=0;i<=numbers[i];i++){
    if(numbers[i]>=0){
        numbersAboveZero = numbers[i];
    }
}
