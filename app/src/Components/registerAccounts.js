import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class RegisterAccounts extends Component {
	tonewAccount = e => {
		e.preventDefault();
		this.props.history.push('/RegisterAccount');
	};

	render() {
		return (
			<div className="container mt-4">
				<div className="row d-flex align-middle justify-content-center text-center">
					<div className="col-md-auto m-auto">
						<h2>Already have an account</h2>
						<br />
						<form action="">
							<div className="form-group align-middle justify-content-center">
								<label for="inputemail">Email Address</label>
								<input
									type="email"
									className="form-control"
									id="inputemail"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
								<small>We'll never share your email with anyone else</small>
							</div>
							<div className="form-group">
								<label for="inputpassword">Password</label>
								<input
									type="password"
									className="form-control"
									ind="inputpassword"
									placeholder="Password"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
					<div className="col-md-auto m-auto">
						<h2>New Users</h2>
						<h4>Please click the link below to register</h4>
						<br />
						<button
							type="submit"
							className="btn btn-success"
							onClick={e => this.tonewAccount(e)}>
							Register
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(RegisterAccounts);
