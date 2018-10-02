import React, { Component } from 'react';
import Board from './Board'
import UserList from './UserList'

import "../stylesheets/gameroom.css"

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
		started: true,
		isActive: true,
		currentPlayer: {
			id: 0,
			username: '',
			team: ''
		}
	}

	//Render board 
	renderBoard = () => this.state.started ? <Board /> : null

	render() {
		console.log(this.props)
		return (
			<div className="gameroom">
				<UserList users={[this.state.team1,this.state.team2]}/>
				{this.renderBoard()}
			</div>
		);
	}
}

export default Gameroom;
