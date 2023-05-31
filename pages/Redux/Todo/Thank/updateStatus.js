import { toggle } from '../Action';

const updateStatus = (todoId, currentStatus) => {
   return async (dispatch) => {
      const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
         method: "PATCH",
         headers: {
            'Content-Type': 'application/json ; charset=UTF-8'
         },
         body: JSON.stringify({
            complited: !currentStatus
         })
      })
      const todo = await response.json()
      dispatch(toggle(todo.id))
   }



};

export default updateStatus;