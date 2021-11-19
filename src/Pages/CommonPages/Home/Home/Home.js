import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])

    const topSixProducts = products.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            {
                topSixProducts.length > 0 ?
                    <div>

                        <h2 className="heading">Available Products</h2>
                        <div className="package-container">
                            {
                                topSixProducts.map(product => <SingleProduct product={product}></SingleProduct>)
                            }
                        </div>

                    </div>
                    :
                    <Spinner animation="border" variant="danger"></Spinner>
            }
        </div>
    );
};

export default Home;