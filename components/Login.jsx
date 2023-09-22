
import React, { useState } from 'react';

export default function Register() {
    const [user, setUser] = useState({
        first_name: '',
        email: '',
        password: '',
        confirm_password: "",
        img: ""
    });

    const [errors, setErrors] = useState({
        first_nameERR: '',
        emailERR: "",
        passwordERR: "",
        confirm_passwordERR: '',
        imgERR: "",
    });

    const validateErrors = () => {
        let validEmail = /\S+@\S+\.\S+/;
        let validName = /^[a-zA-Z]+$/;
        setErrors({
            first_nameERR: !user.first_name.length || user.first_name.includes(' ') || !validName.test(user.first_name) ? "Name is required and should not contain spaces" : "",
            emailERR: !user.email.length || !validEmail.test(user.email) ? "Email is required and should be in email format" : "",
            passwordERR: !user.password.length || user.password.length < 8 || user.password.length > 12 ? "Password is required and should be at least 8 characters and max length is 12 characters" : "",
            confirm_passwordERR: !user.confirm_password.length || user.confirm_password !== user.password ? "Confirm password is required and should match the password" : "",
            imgERR: !user.img.length ? "Upload image is required" : ""
        })
    }

    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const sendData = (e) => {
        e.preventDefault();
        validateErrors();
        if (!Object.values(errors).some(error => error !== "")) {
            console.log(user);
        }
    }

    return (
        <div className='text-white w-75 mx-auto'>
            <h1>Register Now</h1>
            <form>
                <label htmlFor="first_name">Name:</label>
                <input onChange={getUserData} className='form-control mb-2' id='name_input' name='first_name' value={user.first_name} />
                {errors.first_nameERR && <span className='span'>{errors.first_nameERR}</span>} <br />
                <label htmlFor="email">Email:</label>
                <input onChange={getUserData} type="email" className='form-control mb-2' id='email_input' name='email' value={user.email} />
                {errors.emailERR && <span className='span'>{errors.emailERR}</span>} <br />
                <label htmlFor="password">Password:</label>
                <input onChange={getUserData} type="password" className='form-control mb-2' id='password_input' name='password' value={user.password} />
                {errors.passwordERR && <span className='span'>{errors.passwordERR}</span>} <br />
                <label htmlFor="confirm_password">Confirm-Password:</label>
                <input type='password' onChange={getUserData} className='form-control mb-2' id='confirm_password_input' name='confirm_password' value={user.confirm_password} />
                {errors.confirm_passwordERR && <span className='span'>{errors.confirm_passwordERR}</span>} <br />
                <label htmlFor="img">img:</label>
                <input type='file' onChange={getUserData} className='form-control mb-2' id='img_input' name='img' value={user.img} />
                {errors.imgERR && <span className='span'>{errors.imgERR}</span>} <br />
                <button onClick={sendData} type='submit' className='btn btn-outline-info'>Submit</button>
            </form >
        </div>
    )
}
