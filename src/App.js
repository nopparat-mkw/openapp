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
				<OpenApp href="https://twitter.com/enzo_ferey">Twitter</OpenApp>
			</header>
		</div>
	)
}

export default App
