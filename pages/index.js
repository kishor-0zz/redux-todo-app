import Todo from "@/Components/Home/Todo.js/Todo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "./Redux/Todo/Thank/fetchTodos";

export default function Home() {
  const todo = useSelector((state) => state.todo)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos)
  }, [dispatch])

  return (
    <>
      <Todo todo={todo} />
    </>
  )
}
