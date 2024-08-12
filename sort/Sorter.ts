import { NumbersCollection } from "./NumbersCollection";

interface Sortable{
    length:number;
    compare(leftIndex:number,rightIndex:number);
    swap(leftIndex:number,rightIndex:number):void;
}

export abstract class Sorter{
    abstract compare(leftIndex:number,rightIndex:number):boolean;
    abstract swap(leftIndex:number,rightIndex:number):void;
    abstract length:number;
    // collection:number[];
    // constructor(public collection:So){
    //     // this.collection = collection;
    // }

    public sort(): void{
        const {length} = this;
        for(let i = 0;i<length;i++){
            for(let j=0;j<length-i-1;j++){
                // if(this.collection instanceof Array){
                    // collection === number[]
                if(this.compare(j,j+1)){
                    this.swap(j,j+1);
                    // const temp  = this.collection[j];
                    // this.collection[j]= this.collection[j+1];
                    // this.collection[j+1] = temp;
                }
                
            // }
// type guard-primitive type 
            // if(typeof this.collection === 'string'){
                
            // }
            }
    }
}
}