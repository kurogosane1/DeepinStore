import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Consumer } from '../Store/context';
import Home from './Home';
import DeepinProMain from './DeepinProMain';
import Cart from '../CartStore/Cart';
import Payments from './Payment';
import Accounts from './registerAccounts';
import RegAccounts from './AccountRegister';

export default class Views extends Component {
	render() {
		return (
			<Consumer>
				{context => {
					return (
						<React.Fragment>
							<Route exact path="/" component={Home} />
							<Route
								exact
								path="/DeepinPro"
								component={DeepinProMain}
								className="Deepins"
							/>
							{context.state.cart.length !== 0 ? (
								<Route
									exact
									path="/Cart"
									render={props => <Cart {...props} data={context} />}
									className="Deepins"
								/>
							) : (
								console.log()
							)}
							<Route exact path="/Payments" component={Payments} />
							<Route exact path="/Accounts" component={Accounts} />
							<Route exact path="/RegisterAccount" component={RegAccounts} />
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}
