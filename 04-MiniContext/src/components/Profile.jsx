import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
	const { user, setUser } = useContext(UserContext);

	if (!user) return <div>Please Login.</div>;

	return (
		<div>
			<h1>Welcome, {user.username}! 🥳</h1>
			<button onClick={() => setUser(null)}>Logout</button>
		</div>
	);
}

export default Profile;
