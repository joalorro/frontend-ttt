import React, { Component } from 'react';
import Board from './Board'
import PlayerList from './PlayerList'

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
				<PlayerList teams={{team1:this.state.team1,team2:this.state.team2}}/>
				{this.renderBoard()}
			</div>
		);
	}
}

export default Gameroom;
