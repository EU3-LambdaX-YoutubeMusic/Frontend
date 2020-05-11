import React from 'react';
import { Form, Formik } from 'formik';


export default function RegisterForm () {
    return (
        <div>
        <h1>Create an Account</h1>
        <Formik>
            <Form>
              <label>First Name</label>  
              <input
              name="First Name"
              type="text"
              placeholder="John"
              />
              <label>Last Name</label>  
              <input
              name="Last Name"
              type="text"
              placeholder="Doe"
              />
              <label>Email</label>  
              <input
              name="Email"
              type="email"
              placeholder="johndoe@example.com"
              />
              <label>Password</label>  
              <input
              name="password"
              type="password"
              placeholder="Enter your password"
              />
            </Form>
        </Formik>
        </div>
    )
}