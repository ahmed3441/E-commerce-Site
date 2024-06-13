import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/UserSlice';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(addUser(data));
        navigate('/allusers');
        console.log("CRUD DATA PERSON", data);
    };

    return (
        <div className="customer-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="customer-form">
                <h2 className='customer-form-header'>Customer Information</h2>
                <div className="customer-form-row">
                    <div className="customer-form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className="error">{errors.name.message}</p>}
                    </div>
                    <div className="customer-form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                </div>
                <div className="customer-form-row">
                    <div className="customer-form-group">
                        <label htmlFor="contact">Contact Number</label>
                        <input type="number" id="number" {...register("number", { required: "Contact Number is required", minLength: { value: 3, message: "Invalid Contact Number" } })} />
                        {errors.number && <p className="error">{errors.number.message}</p>}
                    </div>
                    <div className="customer-form-group">
                        <label htmlFor="order">Order</label>
                        <input type="number" id="order" {...register("order", { required: "Complete Order is required" })} />
                        {errors.order && <p className="error">{errors.order.message}</p>}
                    </div>
                </div>
                <div className="customer-form-row">
                    <div className="customer-form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" {...register("address", { required: "Complete Address is required" })} />
                        {errors.address && <p className="error">{errors.address.message}</p>}
                    </div>
                    <div className="customer-form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" {...register("city", { required: "City is required" })} />
                        {errors.city && <p className="error">{errors.city.message}</p>}
                    </div>
                </div>
                <div className="customer-form-row">
                    <div className="customer-form-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender"  className='gender-value'{...register("gender", { required: "Please select your gender" })}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && <p className="error">{errors.gender.message}</p>}
                    </div>
                    <div className="customer-form-group">
                        <label htmlFor="payment">Payment Method</label>
                        <select id="payment" className='gender-value' {...register("payment", { required: "Please select your Payment Method" })}>
                            <option value="">Select Payment Method</option>
                            <option value="easipaisa">Easipaisa</option>
                            <option value="jazzcash">Jazz Cash</option>
                            <option value="bank">Bank Transfer</option>
                        </select>
                        {errors.payment && <p className="error">{errors.payment.message}</p>}
                    </div>
                </div>
                <div className="customer-form-row">
                    <div className="customer-form-group">
                        <button className="btnn button" type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CustomerForm;
