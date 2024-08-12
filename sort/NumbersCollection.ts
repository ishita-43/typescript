import { Sorter } from "./Sorter";
export class NumbersCollection extends Sorter{
    // data: number[];
    constructor(public data:number[]){
        // this.data = data;
        super();
    }
    get length():number{
        return this.data.length;
    }
    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex] >this.data[rightIndex];
    }
    swap(leftIndex:number,rightIndex:number):void{
        const temp  = this.data[leftIndex];
        this.data[leftIndex]= this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}

// const collection = new NumbersCollection([1,2,3,]);
// collection.length;//access without use of () because of get 