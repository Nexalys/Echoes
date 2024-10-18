import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { signinUser } from '../firebase';

import circle1 from "../../../public/assets/circle1.svg"
import circle2 from "../../../public/assets/circle2.svg"
import circle3 from "../../../public/assets/circle3.svg"
import circle4 from "../../../public/assets/circle4.svg"
import circle5 from "../../../public/assets/circle5.svg"
import circle6 from "../../../public/assets/circle6.svg"

import "./sign-in.css";

export default function Signin() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        signinUser(data.username, data.password);
        navigate(`/homepage/${data.username}`);
    };
    return (

        <div className='signin-container'>
            <p>ECHOES</p>

            <div className='signin-main'>
                <div className='signin-main-text'>
                    <h3>Sign-In to your account</h3>
                </div>

                <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="signin-form-group">
                        <label className="signin-floating-label">Username *</label>
                        <div className='signin-input-container'>
                            <input className="signin-input" type="text" {...register("username", { required: true })} />
                        </div>
                        {errors.username && <p className="signin-error-message">Username is required.</p>}
                    </div>

                    <div className="signin-form-group">
                        <label className="signin-floating-label">Password *</label>
                        <div className='signin-input-container'>
                            <input className="signin-input" type="password" {...register("password", {
                                required: true,
                                minLength: 8,
                                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
                            })} />
                        </div>
                        {errors.password && <p className="signin-error-message">Password is required and must be at least 8 characters long, contain an uppercase letter, a special character, and a number.</p>}
                    </div>

                    <div className='signin-button-container'>
                        <input className="signin-button" type="submit" value="Sign-In" />
                        <button className="signin-button" type="button">Sign-In with Google</button>
                    </div>
                </form>
                <div className="signin-signup-link">
                    <Link to="/sign-up">Don’t have an account? Sign Up!</Link>
                </div>

            </div>

            {/* <img src={circle1} alt="Circle 1" className="background-circle circle1" />
        <img src={circle2} alt="Circle 2" className="background-circle circle2" />
        <img src={circle3} alt="Circle 3" className="background-circle circle3" />
        <img src={circle4} alt="Circle 4" className="background-circle circle4" />
        <img src={circle5} alt="Circle 5" className="background-circle circle5" />
        <img src={circle6} alt="Circle 6" className="background-circle circle6" /> */}
        </div>
    );
}
