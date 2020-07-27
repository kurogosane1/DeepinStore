import React, { Component } from 'react';
import Axios from 'axios';

class RegisterAccount extends Component {
	state = {
		lastname: '',
		middlename: '',
		firstname: '',
		email: '',
		streetaddress1: '',
		streetaddress2: '',
		city: '',
		state: '',
		zipcode: '',
		cell: '',
	};
	sendInfo = e => {
		e.preventDefault();
		console.log('submit button was clicked');
		console.log(this.state);
		Axios.post('/RegisterAccounts', this.state)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	handleChangeFirst = e => {
		this.setState({
			firstname: e.target.value,
		});
	};
	handleChangeMiddle = e => {
		this.setState({
			middlename: e.target.value,
		});
	};
	handleChangelast = e => {
		this.setState({
			lastname: e.target.value,
		});
	};

	handleChangeemail = e => {
		this.setState({
			email: e.target.value,
		});
	};

	handleChangestreetaddress1 = e => {
		this.setState({
			streetaddress1: e.target.value,
		});
	};
	handleChangestreetaddress2 = e => {
		this.setState({
			streetaddress2: e.target.value,
		});
	};
	handleChangestreetcity = e => {
		this.setState({
			city: e.target.value,
		});
	};

	handleChangestreetstate = e => {
		this.setState({
			state: e.target.value,
		});
	};

	handleChangeszipcode = e => {
		this.setState({
			zipcode: e.target.value,
		});
	};

	handleChangescell = e => {
		this.setState({
			cell: e.target.value,
		});
	};
	handleChangeState = e => {
		this.setState({
			state: e.target.value,
		});
	};

	render() {
		return (
			<div className="container m-auto">
				<h2>New Users</h2>
				<h4>Please fill the information below</h4>
				<br />
				<form on onSubmit={e => this.sendInfo(e)}>
					<div className="form-group">
						<label for="firstname">First Name</label>
						<input
							type="text"
							className="form-control"
							id="input_full_name"
							aria-describedby="emailHelp"
							placeholder="First Name"
							onChange={this.handleChangeFirst}
							value={this.state.firstname}
						/>
					</div>
					<div className="form-group">
						<label for="middlename">Middle Name</label>
						<input
							type="text"
							className="form-control"
							id="input_middle"
							aria-describedby="emailHelp"
							placeholder="Middle Name"
							onChange={this.handleChangeMiddle}
							value={this.state.middlename}
						/>
					</div>

					<div className="form-group">
						<label for="lastname">Last Name</label>
						<input
							type="text"
							className="form-control"
							id="input_last"
							aria-describedby="emailHelp"
							placeholder="Last Name"
							value={this.state.lastname}
							onChange={this.handleChangelast}
						/>
					</div>
					<div className="form-group">
						<label for="inputemail">Email Address</label>
						<input
							type="text"
							className="form-control"
							id="inputemail"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							onChange={this.handleChangeemail}
							value={this.state.email}
						/>
						<small>We'll never share your email with anyone else</small>
					</div>
					<div className="form-group">
						<label for="inputAddress">Address</label>
						<input
							type="text"
							className="form-control"
							id="inputAddress"
							placeholder="1234 Main St"
							onChange={this.handleChangestreetaddress1}
							value={this.state.streetaddress1}
						/>
					</div>
					<div className="form-group">
						<label for="inputAddress2">Address 2</label>
						<input
							type="text"
							className="form-control"
							id="inputAddress2"
							placeholder="Apartment, studio, or floor"
							onChange={this.handleChangestreetaddress2}
							value={this.state.streetaddress2}
						/>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label for="inputCity">City</label>
							<input
								type="text"
								className="form-control"
								id="inputCity"
								onChange={this.handleChangestreetcity}
								value={this.state.city}
							/>
						</div>
						<div className="form-group col-md-4">
							<label for="inputState">State</label>
							<select
								id="inputState"
								className="form-control"
								onChange={this.handleChangeState}>
								<option selected>Choose...</option>
								<option value="TX">AK</option>
								<option value="NY">NY</option>
								<option value="NZ">CA</option>
								<option value="NV">NV</option>
								<option value="NZ">NZ</option>
								<option value="GA">GA</option>
							</select>
						</div>
						<div className="form-group col-md-2">
							<label for="inputZip">Zip</label>
							<input
								type="text"
								className="form-control"
								id="inputZip"
								onChange={this.handleChangeszipcode}
								value={this.state.zipcode}
							/>
						</div>
					</div>
					<div className="form-grou">
						<label htmlFor="phonenumber">Phone Number</label>
						<input
							type="text"
							className="form-control"
							id="phonenumber"
							onChange={this.handleChangescell}
							value={this.state.cell}
						/>
					</div>
					<br />
					<button type="submit" className="btn btn-primary">
						Register
					</button>
				</form>
			</div>
		);
	}
}

export default RegisterAccount;
