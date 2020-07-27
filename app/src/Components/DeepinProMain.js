import React, { Component } from 'react';
import SecondNavBar from './SecondNavBar.js';

class DeepinProMain extends Component {
	render() {
		return (
			<div>
				<SecondNavBar data={this.props} />
			</div>
		);
	}
}
export default DeepinProMain;
