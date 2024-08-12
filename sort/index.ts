// console.log("hi there");
// // tsc -w  for compile after tsconfig src and build  run node build/index.js

// const logSomething = ()=>{
//     console.log('something');
// };

// logSomething();
// npm -y init ,npm install nodemon concurrently 
import {Sorter} from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';
import { LinkedList } from './LinkedList';

const charactersCollection = new CharactersCollection('xyaab');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const numberCollection = new NumbersCollection([3,4,2]);
console.log(numberCollection.data);
charactersCollection.sort();
// const linkedList = new LinkedList();
// linkedList.add(44);
// linkedList.add(44);
// linkedList.sort();
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();


// const numberCollection = new NumbersCollection([10,3,-2,33]);

// const sorter = new Sorter(numberCollection);
// sorter.sort();
// // console.log(sorter.collection);
// console.log(numberCollection.data);