import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import cover1 from '../../../images/cover1.png';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmitProduct = data => {
        console.log(data);
        axios.post('https://infinite-badlands-08899.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully!');
                    reset();
                }
            })
    };
    return (
        <>
            <div className="banner-grid">
                <div>
                    <div className="new-package">
                        <h2 className="package-title">ADD NEW PRODUCT</h2>
                        <form onSubmit={handleSubmit(onSubmitProduct)}>

                            <input type="text" {...register("title", { required: true, maxLength: 20 })} placeholder="Products Name" />
                            <textarea type="text" {...register("description", { required: true, maxLength: 200 })} placeholder="Details about the product" />
                            <input type="number" {...register("price", { required: true })} placeholder="Price (Taka)" />
                            <input type="url" {...register("dp", { required: true })} placeholder="Image URL" />

                            <input type="submit" value="ADD NEW PRODUCT" />
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

export default AddProduct;