import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
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

