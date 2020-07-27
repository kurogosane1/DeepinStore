import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../Store/context';

export default class NavbarLinks extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { state } = value;
					return (
						<React.Fragment>
							<nav className="navbar navbar-expand navbar-light bg-dark justify-content-center">
								<ul className="nav ">
									<li className="nav-item">
										<Link to="/" className="nav-link nav-brand text-white">
											Brand
										</Link>
									</li>
									<li className="nav-item">
										<Link to="DeepinPro" className="nav-link text-white ">
											DeepinPro
										</Link>
									</li>

									{state.isLoggedIn === true ? (
										<li className="nav-item">
											<Link to="Payments" className="nav-link text-white ">
												Payments
											</Link>
										</li>
									) : null}
									<li className="nav-item">
										<Link to="Accounts" className="nav-link text-white ">
											Accounts
										</Link>
									</li>
									{state.cart.length !== 0 ? (
										<li className="nav-item">
											<Link
												to="Cart"
												className="nav-link text-white-50 justify-content-right ">
												Cart <span>{state.cart.length}</span>
											</Link>
										</li>
									) : (
										console.log()
									)}
								</ul>
							</nav>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}
