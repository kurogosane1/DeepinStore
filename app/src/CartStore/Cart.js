import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import VS from '../Assets/SVGs/VScodeMac.svg';
// import { VS } from '../Assets/SVGs/VScodeMac.svg';
// const context = React.createContext();

class Cart extends Component {

	checkout = e => {
		// e.preventDefault();
		console.log(this.props.data.state.isLoggedIn);
		const { isLoggedIn } = this.props.data.state;
		if (isLoggedIn === true) {
			this.props.history.push('/Payments');
		} else {
			this.props.history.push('/Accounts');
		}
	};

	render() {
		const { cart, cartTotal } = this.props.data.state;
		console.log(cart);
		const test = cart.map((data, index) => {
			return (
				<div key={index} className="container">
					<img src={VS} alt="logo" className="logo col-2" />
					<div className="row">
						<div className="col col-4">
							<ul className="information">
								<li>
									<span>{data.Processor}</span>
								</li>

								<li>
									<span>{data.Storage}</span>
								</li>

								<li>
									<span>{data.RAM}</span>
								</li>

								<li>
									<span>{data.Graphics}</span>
								</li>
							</ul>
						</div>

						<div className="col col-3">
							<span>
								Price : <h4>{data.Price}</h4>
							</span>
						</div>
						<div className="col col-3">
							<button
								type="submit"
								className="btn btn-danger"
								onClick={() => this.props.data.deleteCartItems(index)}
								value={index}>
								Delete
							</button>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="container mt-5 pd-5">
				<div className="row">
					<div className="col col-md-auto">{test}</div>
					<div className="col col-md-auto">
						<form>
							<span>Total before Tax: $ {cartTotal}</span>
							<br />
							<span>Tax : $ {cartTotal * 0.0825}</span>
							<br />
							<span>Total : $ {cartTotal * 1.0825}</span>
						</form>

						<button
							type="submit"
							className="btn btn-success"
							onClick={e => this.checkout(e)}>
							Proceed to pay and Checkout
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Cart);
