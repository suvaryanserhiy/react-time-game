import { useState } from 'react';

export default function Player() {
	const [playerName, setPlayerName] = useState();
	const [playerNameConfirmed, setPlayerNameConfirmed] = useState(false);

	function handlePlayerNameChange(e) {
		setPlayerName(e.target.value);
	}

	function handleClick() {
		setPlayerNameConfirmed((confirm) => !confirm);
	}

	return (
		<section id='player'>
			<h2>
				{playerNameConfirmed ? `Welcome ${playerName}!` : 'Please introduce your name!'}
			</h2>
			<p>
				<input type='text' onChange={handlePlayerNameChange} />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
