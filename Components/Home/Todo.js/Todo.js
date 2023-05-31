import { added, clearecompleted, completed } from '@/pages/Redux/Todo/Action';
import addTodo from '@/pages/Redux/Todo/Thank/addTodo';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const Todo = ({ todo }) => {
   const [input, setInput] = useState('')
   const dispatch = useDispatch();

   const handelInput = (e) => {
      setInput(e.target.value)
   }
   const handelSubmit = (e) => {
      e.preventDefault();
      dispatch(addTodo(input))
      setInput(" ")
   }




   const filter = useSelector((state) => state.filter)
   const filterByStatus = (todo) => {
      const { status } = filter;
      switch (status) {
         case "COMPLETE":
            return todo.complited
         case "INCOMPLETE":
            return !todo.complited

         default:
            return true;
      }

   }
   const filterByColors = (todo) => {
      const { colors } = filter;
      if (colors.length > 0) {
         return colors.includes(todo.color)
      }

      return true;

   }

   const clearComplite = () => {
      dispatch(clearecompleted())
   }
   const compliteAllTask = () => {
      dispatch(completed())
   }


   return (
      <div className="my-20">
         <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 m-auto bg-white">
            <div>
               <form
                  onSubmit={handelSubmit}
                  className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
               >
                  <img
                     src="../images/notes.png"
                     className="w-6 h-6"
                     alt="Add todo"
                  />
                  <input
                     value={input}
                     onChange={handelInput}
                     type="text"
                     placeholder="Type your todo"
                     className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                  />
                  <button
                     type="submit"
                     className="appearance-none w-8 h-8 bg-[url('../public/images/plus.png')] bg-no-repeat bg-contain"
                  ></button>
               </form>

               <ul className="flex justify-between my-4 text-xs text-gray-500">
                  <li className="flex space-x-1 cursor-pointer">
                     <img
                        className="w-4 h-4"
                        src="../images/double-tick.png"
                        alt="Complete"
                     />
                     <span onClick={compliteAllTask} >Complete All Tasks</span>
                  </li>
                  <li className="cursor-pointer" onClick={clearComplite} >Clear completed</li>
               </ul>
            </div>
            <hr className="mt-4" />
            {
               todo
                  .filter(filterByStatus)
                  .filter(filterByColors)
                  .map(todo => <TodoItem key={todo.id} todo={todo} ></TodoItem>)
            }
            <hr className="mt-4" />
         </div>
      </div>
   );
};

export default Todo;