//el initialstate se puede llamar de cualquier forma pero en teoria se llama es initilaState
const initialState = [
  {
    id: 1,
    todo: "comprar pan",
    done: false,
  },
];

//creacion del reducer es una funcion pero con dos parametros state y action
const todosReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }

  return state;
};

//agregar otro todo al reducer por lo general se envia con una accion
const newTodo = {
  id: 2,
  todo: "ir a comer con Laura",
  done: false,
};

//action para agregar todos
const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

let todos = todosReducer(initialState, agregarTodoAction);

console.log(todos);
