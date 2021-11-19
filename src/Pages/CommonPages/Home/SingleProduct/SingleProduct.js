import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css'
const SingleProduct = (props) => {
    const { _id, title, description, price, dp } = props.product;
    return (
        <Col>
            <Card className="package-div">
                <Card.Img variant="top" className="" src={dp} />
                <Card.Body>
                    <Card.Title className="single-package-title"><strong>{title}</strong></Card.Title>
                    <Card.Text className="package-intro">{description}</Card.Text>
                    <Card.Text><strong>Price: TK. {price}</strong></Card.Text>
                </Card.Body>
                {/* <Link to={`/placeOrder`}><button className="place-order-button"><strong>PLACE ORDER</strong></button></Link> */}
                <Link to={`/placeOrder/${_id}`}><button className="place-order-button"><strong>PLACE ORDER</strong></button></Link>
            </Card>
        </Col>
    );
};

export default SingleProduct;