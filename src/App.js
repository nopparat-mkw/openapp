import React from 'react'
import logo from './logo.svg'
import './App.css'
import OpenApp from 'react-open-app'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<br />
				<br />
				<OpenApp
					href="https://online.kasikornbankgroup.com/K-Online/login.jsp?lang=TH"
					android="https://play.google.com/store/apps/details?id=com.kasikorn.retail.mbanking.wap"
					ios="https://apps.apple.com/th/app/k-plus/id361170631"
				>
					Kasikorn
				</OpenApp>
				<br />
				<OpenApp href="https://play.google.com/store/apps/details?id=com.kasikorn.retail.mbanking.wap">
					Kasikorn
				</OpenApp>
			</header>
		</div>
	)
}

export default App
