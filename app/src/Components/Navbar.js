import React, { Component } from 'react';

import Navbarlinks from './NavbarLinks';
import View from './Views';

export default class Navbar extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbarlinks />
				<View />
			</React.Fragment>
		);
	}
}
