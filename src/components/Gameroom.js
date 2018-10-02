import React, { Component, Fragment } from 'react';
import Board from './Board'
import PlayerList from './PlayerList'
import { ActionCable } from 'react-actioncable-provider'
import "../stylesheets/gameroom.css"

class Gameroom extends Component {

	state = {
		id: 1,
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
			user: this.props.user,
			placed: false
		}
	}

	onReceived = (message) => {
		console.log(message)
	}

	sendMessage = () => {
		const state = this.state
		this.refs.GamesChannel.perform('something', { state })
	}

	renderBoard = () => this.state.started ? <Board /> : null

	handleClick = e => {

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
				<ActionCable
					ref="GamesChannel"
					channel={{channel: 'GamesChannel', game_id: this.state.id, user_id: this.props.user.id}}
					onReceived={this.onReceived}
					sendMessage={this.sendMessage}
					/>
				<PlayerList teams={{team1:this.state.team1, team2:this.state.team2}}/>
				{this.pickTeams()}
				{this.renderBoard()}
				<button onClick={this.sendMessage} value="Saying Something ;)"/>
			</div>
		);
	}
}

export default Gameroom;
