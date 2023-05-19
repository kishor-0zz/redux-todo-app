import { ADDED, ALLCOMPLETED, CLEARECOMPLETED, COLORSELECTOR, DELETED, TOGGLE } from "./ActionTypes"

export const added = (addText) => {
   return {
      type: ADDED,
      payload: addText
   }
}
export const toggle = (todoId) => {
   return {
      type: TOGGLE,
      payload: todoId
   }
}
export const colorSelector = (colorId, color) => {
   return {
      type: COLORSELECTOR,
      payload: {
         colorId,
         color
      }
   }
}
export const deleted = (deleteId) => {
   return {
      type: DELETED,
      payload: deleteId
   }
}
export const completed = () => {
   return {
      type: ALLCOMPLETED,
   }
}
export const clearecompleted = () => {
   return {
      type: CLEARECOMPLETED,
   }
}
