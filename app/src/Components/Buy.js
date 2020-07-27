import React, { Component } from 'react';
import VS from '../Assets/DesktopEnv.svg';
import { Consumer } from '../Store/context';

// import axios from 'axios';

class Buy extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { state, laptop } = value;
					const choice1 = state.laptopChoices[0];
					const choice2 = state.laptopChoices[1];

					return (
						<div className="container mt-5">
							<div className="heading mb-5 text-center">
								<h3>15inch Deepin Pro</h3>
								<span>We're here to help. Feel to Contact Us</span>
							</div>
							<div className="row justify-content-sm-center pro-options">
								<div className="col-sm">
									<div className="choice1">
										<div>
											<img src={VS} alt="" />
										</div>
										<div className="configuration">
											<div className="configs">
												<h3>
													{choice1.Processor} and {choice1.Storage}
												</h3>
											</div>
											<ul className="choices">
												<li>{choice1.Processor}</li>
												<li>{choice1.RAM}</li>
												<li>{choice1.Graphics}</li>
												<li>{choice1.Storage}</li>
												<li>
													<span>True Tone Laminent Display with Touch</span>
												</li>
												<li>
													<span>Finger Print Sensor on Power Button</span>
												</li>
												<li>
													<span>Four Thunderbolt 3 ports</span>
												</li>
												<li>
													<div className="price-display">
														<h3>${choice1.Price}</h3>
													</div>
												</li>
											</ul>
										</div>

										<div className="selection">
											<button
												onClick={laptop}
												className="btn btn-primary"
												value='1'>
												<h3> Select</h3>
											</button>
											<span>
												<i className="far fa-heart" />
											</span>
										</div>
									</div>
								</div>
								<div className="col-sm right-side">
									<div className="choice1">
										<div>
											<img src={VS} alt="" />
										</div>
										<div className="configuration">
											<div className="configs">
												<h3>
													{choice2.Processor} and {choice2.Storage}
												</h3>
											</div>
											<ul className="choices">
												<li>{choice2.Processor}</li>
												<li>{choice2.RAM}</li>
												<li>{choice2.Graphics}</li>
												<li>{choice2.Storage}</li>
												<li>
													<span>True Tone Laminent Display with Touch</span>
												</li>
												<li>
													<span>Finger Print Sensor on Power Button</span>
												</li>
												<li>
													<span>Four Thunderbolt 3 ports</span>
												</li>
												<li>
													<div className="price-display">
														<h3>${choice2.Price}</h3>
													</div>
												</li>
											</ul>
										</div>

										<div className="selection">
											<button
												onClick={laptop}
												className="btn btn-primary"
												value='2'>
												<h3> Select</h3>
											</button>
											<span>
												<i className="far fa-heart" />
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Buy;
// constructor(props) {
// 	super(props);
// 	this.state = {
// 		// Processor: '',
// 		// Storage: '',
// 		// RAM: '',
// 		// Graphics: '',
// 		choice1: {
// 			Processor: 'Core-i5 8750 Boost Speed upto 4.2GHZ 6 Core',
// 			Storage: '512GB M.2 NVME SSD',
// 			RAM: '8GB of DDR5 RAM upto 2333HZ',
// 			Graphics: 'MX150 with 2GB RAM 25Watts',
// 			Price: '1,000.00',
// 		},
// 		choice2: {
// 			Processor: 'Core-i7 8850 Boost Speed upto 5.0GHZ 8 Core',
// 			Storage: '1TB M.2 NVME SSD',
// 			RAM: '16GB of DDR5 RAM upto 2333HZ',
// 			Graphics: 'RTX 2050 TI with 8GB of RAM',
// 			Price: '1,500.00',
// 		},
// 	};
// }
// // addActive = x => {
// // 	let y = x;
// // 	console.log(y.classList);
// // 	y.classList.add('active');
// // };
// calculation = e => {
// 	console.log('this has been clicked');
// 	console.log(e.target.value);
// };

// selectProcessor = e => {
// 	let processor = e.target.innerText;
// 	this.setState({
// 		Processor: processor,
// 	});
// 	// this.addActive(data);
// };
// selectmemory = e => {
// 	let ram = e.target.innerText;
// 	this.setState({
// 		RAM: ram,
// 	});
// 	// this.addActive(data);
// };
// selectGraphics = e => {
// 	let graph = e.target.innerText;
// 	this.setState({
// 		Graphics: graph,
// 	});
// 	// this.addActive(data);
// };

// selectStorage = e => {
// 	let store = e.target.innerText;
// 	this.setState({
// 		Storage: store,
// 	});
// 	// this.addActive(data);
// };

// choice2 = e => {
// 	console.log('This has been clicked choice 2');
// 	axios
// 		.post('/DeepinPro', this.state.choice2)
// 		.then(res => {
// 			console.log(res);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// };

// choice1 = e => {
// 	console.log('This is has clicked choice 1');
// };
