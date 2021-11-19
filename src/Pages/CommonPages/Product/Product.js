import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleProduct from '../Home/SingleProduct/SingleProduct';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://infinite-badlands-08899.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])
    return (
        <div>
            {
                products.length > 0 ?
                    <div>

                        <h2 className="heading">All Products</h2>
                        <div className="package-container">
                            {
                                products.map(product => <SingleProduct product={product}></SingleProduct>)
                            }
                        </div>

                    </div>
                    :
                    <Spinner animation="border" variant="danger"></Spinner>
            }
        </div>
    );
};

export default Product;