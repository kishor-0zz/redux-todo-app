import { useDispatch } from 'react-redux';
import { colorSelector, deleted, toggle } from '@/pages/Redux/Todo/Action';
import React from 'react';


const TodoItem = ({ todo }) => {
   const dispatch = useDispatch()
   const { text, id, color, complited } = todo;

   const toggleChange = (todoId) => {
      dispatch(toggle(todoId))
   }
   const handelClolorChange = (colorId, color) => {
      dispatch(colorSelector(colorId, color))
   }
   const deleteHandeler = (deleteId) => {
      dispatch(deleted(deleteId))
   }

   return (
      <div>
         <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
         >
            <div
               className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
            >
               <div
                  className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${complited && "border-green-500 focus-within:border-green-500"} `}
               >
                  <input
                     type="checkbox"
                     className="opacity-0 absolute rounded-full"
                     checked={complited}
                     onChange={() => toggleChange(id)}
                  />
                  {
                     complited && <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                     >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                     </svg>
                  }

               </div>

               <div className="select-none flex-1 line-through">
                  {text}
               </div>

               <div
                  className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${color === "green" && "bg-green-500"} `}
                  onClick={() => handelClolorChange(id, "green")}
               ></div>
               <div
                  className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === "yellow" && "bg-yellow-500"} `}
                  onClick={() => handelClolorChange(id, "yellow")}
               ></div>
               <div
                  className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === "red" && "bg-red-500"} `}
                  onClick={() => handelClolorChange(id, "red")}
               ></div>



               <img
                  src="../images/cancel.png"
                  className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                  alt="Cancel"
                  onClick={() => deleteHandeler(id)}
               />
            </div>
         </div>
      </div>
   );
};

export default TodoItem;