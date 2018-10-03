import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Gameroom from './Gameroom'
import { API_ROOT, HEADERS } from '../constants'


class Pregame extends Component {
	state = {
		username: '',
		user: null,
		usernameSubmitted: false,
		roomChosen: false,
		chosenRoom: 0
	}

	handleChange = e => {
		this.setState({username: e.target.value})
	}


	handleSubmit = (event) => {
		event.preventDefault();
			fetch(`${API_ROOT}/users`, {
				method: 'POST',
				headers: HEADERS,
				body: JSON.stringify({"name": this.state.username})
			})
			.then(resp => resp.json())
			.then(user => {
				this.setState({ user, usernameSubmitted: true, username: '' })
			})
	}

	handleSelectRoomClick = (e) => {
		let gameId = parseInt(e.target.dataset.id)
		this.setState({roomChosen: true,chosenRoom: gameId})
		// this.renderGameroom(e.target.dataset.id)
	}

	renderUsernameForm = () => {
		return (
				<form onSubmit={this.handleSubmit}>
					<label>Pick a name for the game!</label> <br/>
					<input type="text" onChange={this.handleChange} />
					<input type="submit" value="Create New Username" />
				</form>
		)
	}

	renderGameroomSelect = () => {
		return !this.state.roomChosen && this.state.usernameSubmitted ? (
			<div>
				<button data-id="1" onClick={this.handleSelectRoomClick}>Enter Gameroom #1</button>
			</div>
		) : null
	}

	renderGameroom = () => {
		return this.state.roomChosen ? (
			<Fragment>
				<Gameroom game_id={this.state.chosenRoom} user={this.state.user} />
			</Fragment>
		) : null
	}

	render() {
		return (
			<div>
				{!this.state.usernameSubmitted ? this.renderUsernameForm() : this.renderGameroomSelect()}
				{this.renderGameroom()}
			</div>
		);
	}
}

// export default withRouter(Pregame);
export default Pregame;
