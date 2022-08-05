import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
	return (
		<div className='app'>
			<Router>
				<Navbar />
				<Routes></Routes>
			</Router>
		</div>
	)
}

export default App
