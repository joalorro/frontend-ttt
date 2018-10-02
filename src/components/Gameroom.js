import React, { Component } from 'react';

class Gameroom extends Component {

	state = {
		id: 0,
		team1: {
			players: [],
			nought: true
		},
		team2: {
			players: [],
			nought: false
		},
		noughtTurn: false,
		isActive: true,
		currentPlayer: {
			id: 0,
			username: '',
			team: ''
		}
	}

	render() {
		return (
			<div>
				
			</div>
		);
	}
}

export default Gameroom;
