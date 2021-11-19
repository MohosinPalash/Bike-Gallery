import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/AuthProvider/useAuth';
import cover1 from '../../../images/cover1.png';

const SendReview = () => {
    const { user, logout } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.name = user.displayName;
        console.log('data', data);
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
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
                            <textarea type="text"{...register("review", { required: true, maxLength: 50 })} placeholder="Write your review here" />
                            <input type="number" {...register("rating", { required: true, maxLength: 100 })} placeholder="Rate us (1 to 5)" />
                            <input type="submit" className="submit-button" value="SEND REVIEW" />
                            <p id="confirm-msg" style={{ color: 'green', display: 'none' }}>Your review is sent successfully!
                                <Link to={'/home'}><strong>Go to home</strong></Link>
                            </p>
                        </form>

                    </div>
                </div>
                <div className="login-info">
                    <img src={cover1} alt="" />
                </div>
            </div>
        </>
    );
};

export default SendReview;