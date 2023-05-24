import { colorchange, statuschange } from '@/pages/Redux/Filter/Actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const numberOfTodos = (no_of_todos) => {
   switch (no_of_todos) {
      case 0:
         return "no task"
      case 1:
         return "1 task"
      default:
         return `${no_of_todos} tasks`
   }
}

const Footer = () => {
   const dispatch = useDispatch()
   const todo = useSelector((state) => state.todo);
   const todoRemaining = todo.filter(todo => !todo.complited).length;
   const filter = useSelector((state) => state.filter);

   console.log(filter.colors);


   const handelStatusChange = (color) => {
      dispatch(statuschange(color))
      console.log('ok');
   }


   const handelColorChange = (colorId) => {
      if (filter.colors.includes(colorId)) {
         dispatch(colorchange(colorId, "remove"))
      }
      else {
         dispatch(colorchange(colorId, "added"))
      }

   }


   return (
      <div className="my-5">
         <div className="m-4 flex justify-around text-xs text-gray-500">
            <p>{numberOfTodos(todoRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
               <li className={`cursor-pointer ${filter.status === "ALL" && "font-bold"}`} onClick={() => handelStatusChange("ALL")} >All</li>
               <li>|</li>
               <li className={`cursor-pointer ${filter.status === "INCOMPLETE" && "font-bold"}`} onClick={() => handelStatusChange("INCOMPLETE")} >Incomplete</li>
               <li>|</li>
               <li className={`cursor-pointer ${filter.status === "COMPLETE" && "font-bold"}`} onClick={() => handelStatusChange("COMPLETE")}>Complete</li>
               <li></li>
               <li></li>
               <li
                  className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filter.colors.includes("green") && "bg-green-500"} `}
                  onClick={() => handelColorChange("green")}
               ></li>
               <li
                  className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filter.colors.includes("red") && "bg-red-500"} `}
                  onClick={() => handelColorChange("red")}
               ></li>
               <li
                  className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
                  onClick={() => handelColorChange("yellow")}
               ></li>
            </ul>
         </div>
      </div>
   );
};

export default Footer;