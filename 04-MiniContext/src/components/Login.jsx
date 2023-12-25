import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);

	function handleSubmit(e) {
		e.preventDefault();

		if (!username || !password) return;

		setUser({ username, password });

		setUsername("");
		setPassword("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
      <br />
			<input
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
      <br />
			<button>Submit</button>
		</form>
	);
}

export default Login;
