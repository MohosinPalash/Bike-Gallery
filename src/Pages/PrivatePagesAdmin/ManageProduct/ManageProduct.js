import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://infinite-badlands-08899.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])

    //Delete Product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to delete the product?');
        if (proceed) {
            const url = `https://infinite-badlands-08899.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Cancelled Successfully!');
                        const remainingProduct = products.filter(product => product._id != id)
                        setProducts(remainingProduct);
                    }
                })
        }
    }
    return (
        products.length > 0 ?
            <div className="container">
                <h2 style={{ fontWeight: '600' }}>All Products</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        products.map((product, index) =>
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{product.title}</td>
                                    <td><img style={{ height: "50px", width: "80px" }} src={product.dp} alt="" /></td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td><button className="btn btn-danger" onClick={() => handleDeleteProduct(product._id)}>DELETE</button></td>
                                </tr>
                            </tbody>
                        )

                    }

                </Table>
            </div >
            :
            <p>No orders Found!</p>
    );
};

export default ManageProduct;