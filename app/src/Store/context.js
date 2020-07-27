import React, { Component } from 'react';
// import { start } from 'repl';

const Context = React.createContext();

export class Provider extends Component {
	state = {
		isLoggedIn: false,
		laptopChoices: [
			{
				Processor: 'Core-i5 8750 Boost Speed upto 4.2GHZ 6 Core',
				Storage: '512GB M.2 NVME SSD',
				RAM: '8GB of DDR5 RAM upto 2333HZ',
				Graphics: 'MX150 with 2GB RAM 25Watts',
				Price: 1000,
			},
			{
				Processor: 'Core-i7 8850 Boost Speed upto 5.0GHZ 8 Core',
				Storage: '1TB M.2 NVME SSD',
				RAM: '16GB of DDR5 RAM upto 2333HZ',
				Graphics: 'RTX 2050 TI with 8GB of RAM',
				Price: 1500,
			},
		],
		isRegistered: false,
		cart: [],
		cartTotal: 0,
	};

	updateTotal = data => {
		const cart = data;
		const updatetotal = cart.reduce((accum, start) => {
			return accum + start.Price;
		}, 0);
		this.setState({
			cartTotal: updatetotal,
		});
		return this.state.cartTotal;
	};

	choice = e => {
		let value = e.target.value;

		if (value === '1') {
			const newCart = this.state.cart.concat(this.state.laptopChoices[0]);
			const total = newCart.reduce((accum, state) => {
				return accum + state.Price;
			}, 0);

			this.setState({
				cart: newCart,
				cartTotal: total,
			});
			return this.state;
		} else if (value === '2') {
			const newCart = this.state.cart.concat(this.state.laptopChoices[1]);
			const total = newCart.reduce((accum, state) => {
				return accum + state.Price;
			}, 0);
			this.setState({
				cart: newCart,
				cartTotal: total,
			});
			return this.state;
		}
	};

	render() {
		return (
			<Context.Provider
				value={{
					state: this.state,
					laptop: this.choice,
					deleteCartItems: val => {
						console.log('hello from the provider side');
						const copyOfCart = this.state.cart.slice();
						copyOfCart.splice(val, 1);
						this.updateTotal(copyOfCart);
						this.setState({
							cart: copyOfCart,
						});
					},
				}}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
