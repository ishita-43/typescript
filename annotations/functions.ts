const add= (a:number, b:number): number=>{
 return a+b;
};
function divide(a:number,b:number):number{
 return a/b;
}

const message = (message:string):void=>{
    console.log(message);
};

const throwError = (message:string):never=>{
    throw new Error(message);
}

const foreCast = {
    date: new Date(),
    whether: 'sunny'
};

const logger = ({date,whether}:{date:Date, whether:string}):void=>{
    console.log(date);
    console.log(whether);
};