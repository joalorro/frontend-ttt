import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Gameroom from './Gameroom'
import { API_ROOT, HEADERS } from '../constants'

class Pregame extends Component {
	state = {
		name: '',
		usernameSubmitted: false
	}

	handleChange = e => {
		this.setState({name: e.target.value})
	}


	handleSubmit = () => {
		this.setState({usernameSubmitted: true}, () => {
			fetch(`${API_ROOT}/users`, {
				method: 'POST',
				headers: HEADERS,
				body: JSON.stringify({"name": this.state.name})
			})
		})

		// this.props.history.push('/gameroom', {username: this.state.username})
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

	renderGameroom = () => <Gameroom username={this.state.username} />

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
