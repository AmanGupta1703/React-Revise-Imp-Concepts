import { useParams } from "react-router-dom";

function User() {
	const { id } = useParams();

	return (
		<div className="bg-gray-600 text-gray-300 text-3xl text-center p-4">
			User: {id}
		</div>
	);
}

export default User;
