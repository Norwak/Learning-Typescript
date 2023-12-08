import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTogo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}

async function getUrl() {
  const response = await axios.get(url);
  const todo: Todo = response.data;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTogo(id, title, completed);
}

getUrl();