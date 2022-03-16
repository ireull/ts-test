export interface ITodo {
  id:number;
  title:string;
  completed:boolean;
}
export interface ITodoItem extends ITodo {
  toggleTodo: (id:number) => void;
  removeTodo: (id:number) => void;
}

export interface ITodoList{
  items: ITodo[],
  toggleTodo: (id:number) => void;
  removeTodo: (id:number) => void;
}