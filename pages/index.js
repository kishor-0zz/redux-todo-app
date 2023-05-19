import Todo from "@/Components/Home/Todo.js/Todo";
import { useSelector } from "react-redux";

export default function Home() {
  const todo = useSelector((state) => state.todo)
  return (
    <>
      <Todo todo={todo} />
    </>
  )
}
