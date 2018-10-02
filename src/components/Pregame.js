import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Gameroom from './Gameroom'
class Pregame extends Component {
	state = {
		username: '',
		usernameSubmitted: false
	}

	handleChange = e => {
		this.setState({username: e.target.value})
	}

	handleSubmit = () => {
		this.setState({usernameSubmitted: true})
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



	render() {
		return (
			<div>
				{this.state.usernameSubmitted ? (
				<Redirect to={Gameroom} push /> ) 
				: null }
				<Router>
					<Fragment>
						<Route exact path="/gameroom" component={Gameroom}/>
					</Fragment>
				</Router>
					{this.renderUsernameForm()}
			</div>
		);
	}
}

export default Pregame;

