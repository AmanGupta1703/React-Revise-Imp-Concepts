import { useCallback, useEffect, useRef, useState } from "react";

function App() {
	// actual password
	const [password, setPassword] = useState("");

	// conditions
	const [length, setLength] = useState(8); // compulsory
	const [numberAllowed, setNumberAllowed] = useState(false); // optional
	const [charAllowed, setCharAllowed] = useState(false); // optional

	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(
		function () {
			let pass = "";
			let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

			if (numberAllowed) str += "0123456789";
			if (charAllowed) str += "!@#$%^&*-_+=[]{}~";

			for (let index = 1; index <= length; index++) {
				let char = Math.floor(Math.random() * str.length + 1);
				pass += str.charAt(char);
			}

			setPassword(pass);
		},
		[length, numberAllowed, charAllowed, setPassword]
	);

	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, password.length);
		window.navigator.clipboard.writeText(passwordRef.current.value);
	}, [password]);

	useEffect(
		function () {
			passwordGenerator();
		},
		[length, numberAllowed, charAllowed, passwordGenerator]
	);

	return (
		<div className="w-full max-w-md mx-auto shadow-md px-4 my-8 text-orange-500 bg-gray-800">
			<h1 className="text-white text-center capitalize text-4xl">
				password generator
			</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-4">
				<input
					ref={passwordRef}
					type="text"
					value={password}
					className="outline-none w-full py-1 px-3"
					placeholder="Passoword..."
					readOnly
				/>
				<button
					className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition-all"
					onClick={copyPasswordToClipboard}>
					copy
				</button>
			</div>
			<div className="flex text-sm gap-x-2">
				<div className="flex items-center gap-x-1">
					<label className="flex items-center gap-x-1">
						<input
							type="range"
							min={6}
							max={100}
							value={length}
							className="cursor-pointer"
							onChange={(e) => setLength(Number(e.target.value))}
						/>
						<span>Length: {length}</span>
					</label>
				</div>
				<div className="flex items-center gap-x-1">
					<label className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={numberAllowed}
							onChange={(e) =>
								setNumberAllowed((prevNumberAllowed) => !prevNumberAllowed)
							}
						/>
						<span>Numbers</span>
					</label>
				</div>
				<div className="flex items-center gap-x-1">
					<label className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={charAllowed}
							onChange={(e) =>
								setCharAllowed((prevcharAllowed) => !prevcharAllowed)
							}
						/>
						<span>Characters</span>
					</label>
				</div>
			</div>
		</div>
	);
}
export default App;
