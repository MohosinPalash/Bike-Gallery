import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/AuthProvider/useAuth';
import SingleProduct from '../../CommonPages/Home/SingleProduct/SingleProduct';
import './PlaceOrder.css';
const PlaceOrder = () => {

    const { user, logout } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://infinite-badlands-08899.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        data.PID = productId;
        console.log('data', data);
        axios.post('https://infinite-badlands-08899.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Order is placed Successfully!');
                    reset();
                    document.getElementById('confirm-msg').style.display = "block";
                }
            })
    };

    return (
        <>

            <div className="place-order-grid">
                <div>

                    <div className="place-order">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" defaultValue={product.title} {...register("title", { required: true, maxLength: 50 })} />
                            <input type="email" defaultValue={user.email} {...register("email", { required: true, maxLength: 100 })} />
                            <input type="text" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 100 })} />
                            <input type="number" defaultValue={product.price}{...register("Price", { required: true })} placeholder="Fare" />
                            <input type="text" {...register("address", { required: true, maxLength: 150 })} placeholder="Address" />
                            <input type="number" {...register("contact", { required: true })} placeholder="Contact No" />
                            <input type="submit" className="submit-button" value="PLACE ORDER" />
                            <p id="confirm-msg" style={{ color: 'green', display: 'none' }}>Your Order is placed successfully!
                                <Link to={'/home'}><strong>Go to home</strong></Link>
                            </p>
                        </form>

                    </div>
                </div>
                <div className="login-info">
                    {
                        <SingleProduct product={product}></SingleProduct>
                    }

                </div>
            </div>
        </>
    );
};

export default PlaceOrder;