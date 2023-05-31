import React from 'react';
import { colorSelector } from '../Action';

const updateColor = (colorId, color) => {
   return async (dispatch) => {
      const response = await fetch(`http://localhost:9000/todos/${colorId}`, {
         method: "PATCH",
         headers: {
            'Content-Type': 'application/json ; charset=UTF-8'
         },
         body: JSON.stringify({
            color: color
         })
      })
      const todo = await response.json()
      dispatch(colorSelector(todo.id, color))
   }
};

export default updateColor;