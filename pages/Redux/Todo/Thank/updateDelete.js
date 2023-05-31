import { deleted } from '../Action';

const updateDelete = (deleteId) => {
   return async (dispatch) => {
      await fetch(`http://localhost:9000/todos/${deleteId}`, {
         method: 'DELETE'
      })
      dispatch(deleted(deleteId))
   }
};

export default updateDelete;