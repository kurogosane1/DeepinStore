import React, { Component } from 'react';
import flat from '../Assets/DesktopEnv.svg';
import installer from '../Assets/SVGs/DeepinInstaller.svg';
import Personlization from '../Assets/SVGs/Snap.svg';
import Desktop from '../Assets/SVGs/DeepinOS.svg';

export default class DeepinOS extends Component {
	render() {
		return (
			<div className="container-fluid ">
				<div className="OS2 d-flex flex-column">
					<div className="OS container justify-content-center mt-5">
						<h1 id="DeepinPro">DeepinOS</h1>
						<div className="mt-3">
							<h2 id="power">Simply Elegant, Reliable and Easy to Use</h2>
						</div>
						<div className="m-5">
							<p className="Intro">
								DeepinOS is a reliable, easy to use and Elegant OS. It is was
								designed with ease of mind, but powerful for those that need it.
								Use the app store with thousands of apps to work with.{' '}
							</p>
							<p className="Intro">
								deepin is an open source GNU/Linux operating system, based on
								Linux kernel and mainly on desktop applications, supporting
								laptops, desktops and all-in-ones. deepin preinstalls Deepin
								Desktop Environment (DDE) and nearly 30 deepin native
								applications, as well as several applications from the open
								source community to meet users’ daily learning and work needs.
								In addition, about a thousand of applications are offered in
								Deepin Store to meet users’ various needs. deepin, developed by
								professional operating system R&D team and deepin technology
								community (www.deepin.org), is named from deepin technology
								community, which means deep pursuit and exploration of the life
								and the future.
							</p>
							<p className="Intro">
								Time has come for the best to come out from the Shadows and
								shine its light in the linux world
							</p>
							<div className="m-2 p-4">
								<img src={flat} alt="" />
							</div>
						</div>
					</div>
					<br />
					<div className="container text-center align-center">
						<h1 className="mt-3 mb-5">Desktop Enviroment</h1>
						<div className="desktopdetail">
							<div className="m-5">
								<img src={Desktop} alt="OSmain" />
							</div>
							<p>
								Deepin OS is beautiful. You are greeted with options of having a
								beautiful desktop environment
							</p>
							<p>
								The Side panel offers your Onestop settings solution instead of
								going through multiple windows of options
							</p>
							<p>
								This Dock provides a fimiliar feeling to those coming from a
								macOS background. They will feel right at home
							</p>
							<p>
								Windows users, we have not forgotten you . if you would like to
								go back to Windows like Enviroment, then you can also change the
								settings of the dock on the site panel
							</p>
						</div>
					</div>
					<div className="container desktop text-center mt-2">
						<h1 className="mt-3">Security is our Priorty</h1>
						<div className="dektopdetail">
							<p>
								Deepin OS is catering to all those that are looking for a simple
								but elegant linux Operating system but at the same time provides
								those looking for extra security
							</p>
							<p>
								Deeping offers simplicity and attractive that dwelves those
								interested. It offers for all coming from windows environment to
								those coming from Mac
							</p>
						</div>
						<div className="desktop-installer mt-3">
							<h3>
								Deeping even guides you simplilistic installer that also
								provides users with Full Disk Encryption for those requiring
								security and peace of mind
							</h3>
							<img src={installer} alt="" className="img-desk" />
						</div>
						<div className="desktop-customization mt-5">
							<h3 id="power">Customization is a right for every Linux user</h3>
							<p>
								Unlike other desktop enviroments, Deepin offers some of the
								customizability giving the user the freedom to design and feel
								the way he wants his work enviroment to be
							</p>
							<p>
								The user can download and simply personlize the way he or see
								wants it to be by going to the task bar on the right
							</p>
							<strong id="performance">
								Deepin supports synapse based apps
							</strong>
							<div className="container">
								<img src={Personlization} alt="" className="img-desk" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
