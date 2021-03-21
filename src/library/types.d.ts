
const getKeyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];



interface ITodo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  type ITodoState = {
    todos: ITodo[]
  }
  
  interface ITodoAction {
    type: string
    todos?: ITodo[],
    error?: string,
    loading?: boolean;
  }

 type ThunkResult<R> = ThunkAction<R, ITodoState, null, ITodoAction>;

