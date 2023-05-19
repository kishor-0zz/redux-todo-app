import { COLORCHANGE, STATUSCHANGE } from "./actionTypes"


export const colorchange = (color, changeType) => {
   return {
      type: COLORCHANGE,
      payload: {
         color,
         changeType
      }
   }
}

export const statuschange = (status) => {
   return {
      type: STATUSCHANGE,
      payload: status
   }
}