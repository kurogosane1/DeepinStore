import React, { Component } from 'react';

// Components to import
import DeepinPro from './DeepinPro';
import DeepinOS from './DeepinOS';
import Buy from './Buy';

export default class SecondNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOS: false,
			isOverview: true,
			isBuy: false,
		};
	}
	componentDidUnMount() {
		window.removeEventListener('scroll', this.runcheck, false);
	}
	componentDidMount() {
		let x = this.props.data.match.path;
		x === '/DeepinProMain'
			? window.addEventListener('scroll', this.thingstoadd, true)
			: console.log();
	}

	thingstoadd = e => {
		if (this.props.data.match.path === '/DeepinProMain') {
			this.runcheck();
			const nav = document.querySelector('.SecNavbarPro');
			const navlinks = document.querySelectorAll('.nav-link');
			const brand = document.querySelector('#brand');
			const toOfNav = nav.offsetTop;
			if (window.scrollY > toOfNav) {
				nav.classList.add('fixed-top');
				nav.classList.add('justify-content-center');
				nav.classList.add('bg-dark');
				brand.classList.add('text-white');
				navlinks.forEach(text => {
					text.classList.add('text-white-50');
				});
			} else {
				nav.classList.remove('fixed-top');
				nav.classList.remove('justify-content-center');
				nav.classList.remove('bg-dark');
				brand.classList.remove('text-white');
				navlinks.forEach(text => {
					text.classList.remove('text-white-50');
				});
			}
		} else {
			console.log();
		}
	};

	runcheck = e => {
		if (e.target.id === 'Links os') {
			this.setState({
				isOS: true,
				isBuy: false,
				isOverview: false,
			});
		} else if (e.target.id === 'buy Links') {
			this.setState({
				isOS: false,
				isBuy: true,
				isOverview: false,
			});
		} else {
			this.setState({
				isOS: false,
				isBuy: false,
				isOverview: true,
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<nav
					className="navbar SecNavbarPro  container"
					onChange={e => this.thingstoadd(e)}>
					<h3 className="navbar-brand" id="brand">
						Deepin Pro
					</h3>

					<div>
						<ul className="nav">
							<li className="nav-item">
								<span
									className="nav-link active text-dark"
									id="Links overview "
									onClick={e => this.runcheck(e)}>
									Overview
								</span>
							</li>
							<li className="nav-item">
								<span
									className="nav-link text-dark"
									id="Links os"
									onClick={e => this.runcheck(e)}>
									DeepinOS
								</span>
							</li>
							<li className="nav-item">
								<span
									id="buy Links"
									className="nav-link btn btn-primary"
									onClick={e => this.runcheck(e)}>
									BUY
								</span>
							</li>
						</ul>
					</div>
				</nav>

				{this.state.isOverview && !this.state.isOs && !this.state.isOs && (
					<DeepinPro />
				)}
				{this.state.isBuy && !this.state.isOverview && !this.state.isOs && (
					<Buy />
				)}
				{this.state.isOS && !this.state.isOverview && !this.state.isBuy && (
					<DeepinOS />
				)}
			</React.Fragment>
		);
	}
}
