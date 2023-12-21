import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	/*const [data, setData] = useState([]);

	useEffect(function () {
		fetch("https://api.github.com/users/AmanGupta1703")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);*/

	const data = useLoaderData();

	return (
		<div className="m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center gap-y-4">
			Github followers: {data.followers}
			<img
				className="rounded-full"
				src={data.avatar_url}
				alt="Git picture"
				width={300}
			/>
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	try {
		const response = await fetch("https://api.github.com/users/AmanGupta1703");
		return response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};
