import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Gameroom from './Gameroom'
import { API_ROOT, HEADERS } from '../constants'


class Pregame extends Component {
	state = {
		username: '',
		user: null,
		usernameSubmitted: false
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

	renderUsernameForm = () => {
		return (
				<form onSubmit={this.handleSubmit}>
					<label>Pick a name for the game!</label> <br/>
					<input type="text" onChange={this.handleChange} />
					<input type="submit" value="Create New Username" />
				</form>
		)
	}

	renderGameroom = () => {
		return (
			<Fragment>
				<Gameroom user={this.state.user} />
			</Fragment>
		)

	}

	render() {
		console.log(this.state)
		return (
			<div>
				{/* <Router>
					<Fragment>
						<Route exact path="/gameroom" component={Gameroom}/>
					</Fragment>
				</Router> */}
					{!this.state.usernameSubmitted ? this.renderUsernameForm() : this.renderGameroom()}
			</div>
		);
	}
}

// export default withRouter(Pregame);
export default Pregame;
