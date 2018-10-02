import React, { Component } from 'react';
import '../stylesheets/gameroom.css'

class PlayerList extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		team1Players: this.props.teams.team1.players,
		team2Players: this.props.teams.team2.players
	}

	render() {
		return (
			<div className="playerlist">
				
			</div>
		);
	}
}

export default PlayerList;
