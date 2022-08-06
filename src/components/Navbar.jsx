import React from "react"
import "../styles/Navbar.css"
import {Link} from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
	return (
		<div className='navbar'>
			<Link className="link" to="/">
				<div className='logo'>Vit <span className="name">Exchangerz</span></div>
			</Link>
			{/* <div className='search-bar'>
				<input type='text' />
				<AiOutlineSearch className='search-button' />
			</div> */}
			<div className='login'>LOGIN</div>
		</div>
	)
}

export default Navbar
