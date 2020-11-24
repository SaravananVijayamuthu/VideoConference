/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import axios from 'axios';

function Signin({ setToken }) {
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('room');

	async function handleSubmit(event) {
		event.preventDefault();
		const result = await axios.post('https://videoconference-7848-dev.twil.io/VToken', {
			identity: name,
			room
		});
		setToken(result.data);
		console.log('Token : ', result.data)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">
				Name
				<input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<label htmlFor="room">
				Room
				<input type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)} />
			</label>
			<br />
			<button type="submit">Join the chat!!</button>
		</form>
	);
}

export default Signin;
