import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pregame from './components/Pregame'

// class App extends Component {
// 	render() {
// 		return (
// 		<div className="App">
// 			<Pregame />
// 		</div>
// 		);
// 	}
// }

const App = () => {
	return (
		<Router>
			<Fragment>
				<Route exact path='/' component={Pregame} />
			</Fragment>
		</Router>
	)
}

export default App;
