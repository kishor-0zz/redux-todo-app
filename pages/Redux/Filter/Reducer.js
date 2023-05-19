import { COLORCHANGE, STATUSCHANGE } from "./actionTypes";
import initialstate from "./initialstate";


const Reducer = (state = initialstate, action) => {

   switch (action.type) {
      case STATUSCHANGE:
         return {
            ...state,
            status: action.payload
         }
      case COLORCHANGE:
         const { color, changeType } = action.payload
         switch (changeType) {
            case 'added':
               return {
                  ...state,
                  color: [
                     ...state.color,
                     color
                  ]
               }

            case 'remove':
               return state.color.filter(existingColor => existingColor !== color)

            default:
               return state;
         }

      default:
         return state;
   }

}
export default Reducer;