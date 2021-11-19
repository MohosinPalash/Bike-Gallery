import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import SingleProduct from '../SingleProduct/SingleProduct';

import part1 from '../../../../images/part1.jpg';
import part2 from '../../../../images/part2.jpg';
import part3 from '../../../../images/part3.jpg';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useState([]);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://infinite-badlands-08899.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])

    useEffect(() => {
        fetch('https://infinite-badlands-08899.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [review])

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
            {
                review.length > 0 ?
                    <div>

                        <h2 className="heading">Our Clients Review</h2>
                        <div className="package-container">
                            {
                                review.map(review => <Review review={review}></Review>)
                            }
                        </div>

                    </div>
                    :
                    <Spinner animation="border" variant="danger"></Spinner>
            }
            <h2 className="heading">ACCESSORIES</h2>
            <p style={{ marginTop: '10px' }}>We are offering the best accessories across the countries.
                <br /> Safe and comfortable journey is our most priority.
            </p>
            <div className="transport-div">
                <div>

                    <img src={part1} alt="" />
                    <h4 className="service-title">PROTECTION</h4>
                    <p>We areDecorating your bike with strongest protection and handles</p>
                </div>
                <div>

                    <img src={part2} alt="" />
                    <h4 className="service-title">ENGINE</h4>
                    <p>Engine are mostly repairable here, your top class service is here</p>
                </div>
                <div>

                    <img src={part3} alt="" />
                    <h4 className="service-title">CONTROLS</h4>
                    <p>We are making your journey more comfortable with the top class controls</p>
                </div>
            </div>
        </div>
    );
};

export default Home;