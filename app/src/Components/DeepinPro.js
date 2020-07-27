import React, { Component } from 'react';

//Import SVG issue
import Env from '../Assets/DesktopEnv.svg';
import vs from '../Assets/VScodeMac.svg';

export default class componentName extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container mt-5">
					<div>
						<h3 id="DeepinPro">Deepin Pro</h3>
						<h1 id="power">More Power</h1>
						<h1 id="performance">More Performance</h1>
						<h1 id="pro">More Pro</h1>
					</div>

					<img src={Env} alt="Logo" id="Macs" className="mt-5 mb-5" />
					<div className="row container mt-5">
						<div className="col">
							<div className="m-5 border-top border-dark ">
								<h2 className="justify-content-center">
									New eight Generation Intel 6 core and quad-core processors.
								</h2>
							</div>
							<div className="m-5 border-top border-dark ">
								<h2 className="justify-content-center">
									Stunning Liquid Clear Display with 98% Adobe RGB
								</h2>
							</div>
						</div>
						<div className="col">
							<div className="m-5 border-top border-dark ">
								<h2 className="justify-content-center">
									New eight Generation Intel 6 core and quad-core processors.
								</h2>
							</div>
							<div className="m-5 border-top border-dark ">
								<h2 className="justify-content-center">
									Touch screen that works beautifully with the OS
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-4 Performance">
					<div className="heading">
						<h1 className="align-items-start mt-3">Performance</h1>
					</div>
					<div className="description mt-3">
						<h1>Great Power means Greater Potention</h1>
						<h4>
							The Deepin Pro elevates the notebook to a whole new level of
							performance and portability. Where your ideas take you, you'll
							acheive it with performance that won't compromise thanks to its
							powerful Processor, fast-storage and more
						</h4>
						<br />
						<h4>
							Code, Play, Design and more. Whereever your ideas take you, Deepin
							Pro will help you
						</h4>
					</div>
					<br />
					<div className="row mt-3 mb-4">
						<div className="col">
							<h4>Up to</h4>
							<h1>32GB</h1>
							<h4>memory</h4>
						</div>
						<div className="col">
							<h4>Up to</h4>
							<h1>4.8GHZ</h1>
							<h4>Turbo Boost</h4>
						</div>
						<div className="col">
							<h4>Up to</h4>
							<h1>2.2GB/S</h1>
							<h4>SSD read speeds</h4>
						</div>
						<div className="col">
							<h4>Up to</h4>
							<h1>12 hrs</h1>
							<h4>battery life</h4>
						</div>
					</div>

					<div className="imageside mt-3">
						<img src={vs} alt="" />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
