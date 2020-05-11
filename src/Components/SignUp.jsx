import React from 'react';
import { Formik } from 'formik';


export default function RegisterForm () {
    return (
        <Formik>
            <label>First Name</label>
            <input
                name = "firstname"
                type="text"
                placeholder="John"
            />
            <label>Last Name</label>
            <input
                name = "lastname"
                type="text"
                placeholder="Doe"
            />
            <label>Email</label>
            <input
                name = "email"
                type="email"
                placeholder="johndoe@example.com"
            />
            <label>Password</label>
            <input
                name = "password"
                type="password"
                placeholder="Enter your password"
            />
            
        </Formik>
    )
}