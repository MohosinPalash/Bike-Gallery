import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import './Review.css'
const Review = (props) => {
    const { _id, review, rating, email, name } = props.review;
    return (
        <Col>
            <Card className="package-div">
                <Card.Body>
                    <Card.Title className="single-package-title"><strong>{name}</strong></Card.Title>
                    <Card.Text >{email}</Card.Text>
                    <Card.Text >{review}</Card.Text>
                    <Rating name="read-only" value={rating} readOnly />
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;