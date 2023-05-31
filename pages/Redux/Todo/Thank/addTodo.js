import { added } from '../Action'

const addTodo = (todoText) => {
   return async (dispatch) => {
      const response = await fetch("http://localhost:9000/todos", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json ; charset=UTF-8'
         },
         body: JSON.stringify({
            text: todoText,
            completed: true
         })
      })

      const todos = await response.json();
      dispatch(added(todos.text))
   }
};

export default addTodo;