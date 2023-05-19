import { ADDED, TOGGLE, DELETED, COLORSELECTOR, ALLCOMPLETED, CLEARECOMPLETED } from "./ActionTypes";
import initialState from "./initialState";



const nextTodoId = (todo) => {
   const maxId = todo.reducer((id, todo) => Math.max(id, todo.id), -1)
   return maxId + 1;
}

const Reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADDED:
         return [
            ...state,
            {
               id: nextTodoId(state)
            }
         ]
      case TOGGLE:
         return state.map(todo => {
            if (todo.id !== action.payload) {
               return todo;
            }
            return {
               ...todo,
               complited: !todo.complited
            }
         })
      case COLORSELECTOR:
         const { colorId, color } = action.payload;
         return state.map(todo => {
            if (todo.id !== colorId) {
               return todo;
            }
            return {
               ...todo,
               color: color
            }
         })
      case DELETED:
         return state.filter(todo => todo.id !== action.payload)
      case ALLCOMPLETED:
         return state.map(todo => {
            return {
               ...todo,
               complited: true
            }
         })
      case CLEARECOMPLETED:
         return state.filter(todo = !todo.complited)
      default:
         return state;
   }
}
export default Reducer;