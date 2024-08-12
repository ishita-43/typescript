import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo{
    id:number;
    title:string;
    completed: boolean;
}
axios.get(URL).then(response => {
    const todo = response.data as Todo;
    const ID = todo.id;
    const Title = todo.title;
    const Completed = todo.completed;
    logTodo(ID,Title,Completed);

});
const logTodo = (id:number,title:string,completed:boolean) =>{
    console.log(`
        Title: ${title}
        ID : ${id};
        IS Completed? ${completed};
        `);
};




