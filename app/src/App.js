import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.scss';
import { Provider } from './Store/context';
import Footer from './Components/Footer';

class App extends Component {
	render() {
		return (
			<Provider>
				<>
				<Router>
					<div className="App">
						<Navbar />
					</div>
				</Router>
				<Footer />
				</>
				
			</Provider>
		
		);
	}
}

export default App;
