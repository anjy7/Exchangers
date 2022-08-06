import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/Products.css"

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            setData(await response.clone().json());
            setFilter(await response.json());

        }
        getProducts();
    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button onClick={() => setFilter(data)}>All</button>
                    <button onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                <div className="products">

                    {filter.map((product) => {
                        return (<Card
                            key={product.id}
                            product={product}
                        />
                        )
                    })}
                </div>
            </>
        );
    };
    return (
        <div className="container">
            <h1>Latest products</h1>

            <ShowProducts />

        </div>
    );
}

export default Products;