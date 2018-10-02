import React, { Component } from 'react';
import Block from './Block'
import '../stylesheets/board.css'

class Board extends Component {
	
	renderBlocks = () => {
		let blocks = []
		for (let i = 0; i < 9 ; i++){
			blocks[i] = <Block key={i} renderTurn={this.renderTurn} />
		}
		return blocks
	}

	renderTurn = () => {

	}

	render() {
		return (
			<div id="ttt-board">
				{this.renderBlocks()}
			</div>
		);
	}
}

export default Board;
