import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
	todos: [{ id: 1, todo: "SOME TODO MSG", completed: false }],
	addTodo: (todo) => {},
	updateTodo: (id, todo) => {},
	deleteTodo: (id) => {},
	toggleComplete: (id) => {},
});

const TodoContextProvider = TodoContext.Provider;

function useTodo() {
	return useContext(TodoContext);
}

export { TodoContextProvider, useTodo };
