import React from "react"
import {Link} from 'react-router-dom';
import "../styles/Home.css"

const Home = () => {
	return (
		<div className='home'>
			<div className='landing'>
				<div className="landing-img">
					<img className="landing-img" src="../../src/assets/main-img.webp" />
				</div>
				<div className="buttons">
					<Link to="/products">
					<button>Buy</button>
					</Link>
					<Link to="/addItem">
					<button>Add Item</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
