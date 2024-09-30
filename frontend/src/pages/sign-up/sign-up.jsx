import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpUser } from '../firebase';

import circle1 from "../../../public/assets/circle1.svg"
import circle2 from "../../../public/assets/circle2.svg"
import circle3 from "../../../public/assets/circle3.svg"
import circle4 from "../../../public/assets/circle4.svg"
import circle5 from "../../../public/assets/circle5.svg"
import circle6 from "../../../public/assets/circle6.svg"

import "./sign-up.css";

export default function Signup() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    const  onSubmit = async data => {
        const result = await SignUpUser(data);
        if(result?.error){
            alert(`Sign-up failed: ${result.error}`);
        }
        else{
            console.log("user credential: ",result.userCredential)
            console.log("User added")
            navigate(`/`, { state: data });
        }
    };

    
    const password = watch("password");

    return (

        <div className='signup-container'>
            <p>ECHOES</p>

            <div className='signup-main'>
                <div className='signup-main-text'>
                    <h3>Sign-Up here, to start writing</h3>
                    <p>
                        Enter the following data so that we can make your account and you can start publishing your amazing written work! We will need you to connect your preferred cloud storage platform ( Google Drive, Dropbox etc. ) to store your blog files, we’d recommend using the same email here as on said platform. We are happy to have you as a writer on our platform ❤
                    </p>
                </div>

                <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="signup-form-group">
                        <label className="signup-floating-label">First Name *</label>
                        <div className='signup-input-container'>
                            <input className="signup-input" type="text" {...register("firstName", { required: true, maxLength: 80 })} />
                        </div>
                        {errors.firstName && <p className="signup-error-message">First name is required and should be less than 80 characters.</p>}
                    </div>

                    <div className="signup-form-group">
                        <label className="signup-floating-label">Last Name *</label>
                        <div className='signup-input-container'>
                            <input className="signup-input" type="text" {...register("lastName", { required: true, maxLength: 100 })} />
                        </div>
                        {errors.lastName && <p className="signup-error-message">Last name is required and should be less than 100 characters.</p>}
                    </div>

                    <div className="signup-form-group">
                        <label className="signup-floating-label">Username *</label>
                        <div className='signup-input-container'>
                            <input className="signup-input" type="text" {...register("username", { required: true })} />
                        </div>
                        {errors.username && <p className="signup-error-message">Username is required.</p>}
                    </div>

                    <div className="signup-form-group">
                        <label className="signup-floating-label">Email *</label>
                        <div className='signup-input-container'>
                            <input className="signup-input" type="email" {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                            })} />
                        </div>
                        {errors.email && <p className="signup-error-message">Invalid email address. Ensure it starts with a letter and contains an "@" symbol.</p>}
                    </div>

                    <div className="signup-form-group">
                        <label className="signup-floating-label">Password *</label>
                        <div className='signup-input-container'>
                            <input className="signup-input" type="password" {...register("password", {
                                required: true,
                                minLength: 8,
                                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/,
                            })} />
                        </div>
                        {errors.password && <p className="signup-error-message">Password is required and must be at least 8 characters long, contain an uppercase letter, a special character, and a number.</p>}
                    </div>

                    <div className="signup-form-group">
                        <label className="signup-floating-label">Confirm Password *</label>
                        <div className='signup-input-container'>
                            <input className="signup-input" type="password" {...register("confirmPassword", {
                                required: true,
                                validate: value => value === password || "Passwords do not match"
                            })} />
                        </div>
                        {errors.confirmPassword && <p className="signup-error-message">{errors.confirmPassword.message}</p>}
                    </div>

                    <div className='signup-button-container'>
                        <input className="signup-button" type="submit" value="Sign-Up" />
                        <button className="signup-button" type="button">Sign-In with Google</button>
                    </div>
                </form>
                <div className="signup-signin-link">
                    <Link to="/sign-in">Have an account? Sign in here!</Link>
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
