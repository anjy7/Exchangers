import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../components/Home"

const App = () => {
	return (
		<div className='app'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
