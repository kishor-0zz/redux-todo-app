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
                  colors: [
                     ...state.colors,
                     color,
                  ]
               }

            case 'remove':
               return state.colors.filter(existingColor => existingColor !== color)

            default:
               return state;
         }

      default:
         return state;
   }

}
export default Reducer;