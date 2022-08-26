import { useState } from "react";

import "./App.css";

import InputField from "./components/InputField";
import { Todo } from "./types/todo.type";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos(prevTodos => [...prevTodos, { id: Date.now(), todo, isCompleted: false }]);
			setTodo("");
			console.log(todos);
		}
	};

	return (
		<div className="App">
			<h1 className="heading">Taskify</h1>
			<InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
		</div>
	);
};

export default App;
