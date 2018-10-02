import React, { Component, Fragment } from 'react';
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
		started: false,
		isActive: true,
		currentPlayer: {
			id: 0,
			username: this.props.username,
			placed: false
		}
	}


	renderBoard = () => this.state.started ? <Board /> : null

	handleClick = e => {
		console.log(e.target.name)
		let team = e.target.name === 'noughts' ? 'team1' : 'team2'
		this.setState(prevState => {
			return {
				[team]: {
					...prevState[team],
					players: prevState[team].players.concat(this.state.currentPlayer)
				},
				currentPlayer: {
					...prevState.currentPlayer,
					placed: true
				}
			}
		})
	}

	pickTeams = () => {
		return !this.state.started && this.state.isActive && !this.state.currentPlayer.placed ? (
			<div>
				<label>Pick a team</label> <br />
				<button onClick={this.handleClick} name="noughts">Noughts</button>
				<br />
				<button onClick={this.handleClick} name="crosses">Crosses</button>
			</div>
		) : (
			<div>
				Waiting
			</div>
		)

	}


	render() {
		console.log(this.state)
		return (
			<div className="gameroom">

				<PlayerList teams={{team1:this.state.team1, team2:this.state.team2}}/>
				{this.pickTeams()}

				{this.renderBoard()}
			</div>
		);
	}
}

export default Gameroom;
