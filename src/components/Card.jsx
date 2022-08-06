import { NavLink } from "react-router-dom";
import "../styles/Card.css"

function Card({product}) {
    return ( 
        <div className="card">
            <img src={product.image} className="card-img"/>
            <h3>{product.title}</h3>
            <NavLink to={`${product.id}`}>Show More</NavLink>
        </div>
     );
}

export default Card;