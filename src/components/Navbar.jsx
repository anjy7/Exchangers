import React from "react"
import "../styles/Navbar.css"
import { AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>VitXchange</div>
			<div className='search-bar'>
				<input type='text' />
				<AiOutlineSearch className='search-button' />
			</div>
			<div className='login'>LOGIN</div>
		</div>
	)
}

export default Navbar
