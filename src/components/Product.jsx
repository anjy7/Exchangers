import React, { useState, useEffect } from "react";
import { useParams } from "react-router"
import "../styles/Product.css"

function Product() {

    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
        }
        getProduct()
    }, [])

    const ShowProduct = () => {
        return(
            <div className="product-container">
           
                <img className="product-img" src={product.image} alt={product.title}/>
                <div className="left-container">

                <h1>{product.category}</h1>
                <p>
                 {product.description}   
                </p>
                <h2>Estimated Price : ${product.price}</h2>
                <button>Contact Seller</button>
                </div>
                
            </div>
        )
    }

    return (
    <div>
        <ShowProduct/>
        
    </div>);
}

export default Product;