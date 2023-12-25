import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
	const [todos, setTodos] = useState([]);

	// `todo` is itself an object.

	const addTodo = (todo) => {
		setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo }]);
	};

	const updateTodo = (id, todo) => {
		setTodos((prevTodos) =>
			prevTodos.map((item) => (item.id === id ? todo : item))
		);
	};

	const deleteTodo = (id) => {
		setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
	};

	const toggleComplete = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((item) =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		);
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));

		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContextProvider
			value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						<TodoForm />
					</h1>
					<div className="mb-4">{/* Todo form goes here */}</div>
					<div className="flex flex-wrap gap-y-3">
						{todos.map((todo) => (
							<div key={todo.id} className="w-full">
								<TodoItem todo={todo} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoContextProvider>
	);
}

export default App;
