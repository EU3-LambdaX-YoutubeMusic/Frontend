import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { StyledFormField, StyledInput, StyledLabel, StyledSignupContainer, StyledButton } from '../Styles/StyledForm';
import { validationSchema } from '../Helpers/ValidationSchema';

import SignupImage from '../Assets/earphone.png';

const initialSignupForm = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
};


export default function RegisterForm () {
    return (
        <StyledSignupContainer>
        <div className="left">
        <h1>Create an Account</h1>
        <div className="img-cont">
          <img src={SignupImage} alt="Earphones" />
        </div>
        <p>Got an Account? Sign In</p>
        </div>
        <div className="right">
        <Formik
            validationSchema = {validationSchema}
            initialValues = {initialSignupForm}
            onSubmit={(values, actions) => {
                const newUser = {
                    firstname: values.firstname,
                    lastname: values.lastname,
                    email: values.email,
                    password: values.password
                };

                axios()
                .post("/signup", newUser)
                .then(() => {
                    actions.setSubmitting(false);
                })
                .catch(err => {
                    actions.setSubmitting(false);
                });
            }}
            >
            {({
                values,
                isSubmitting,
                handleSubmit
            }) => (
            <StyledFormField onSubmit={handleSubmit}>
              <StyledLabel>First Name</StyledLabel> 
              <div data-testid="firstnameField" className="inputField"> 
              <StyledInput
              name="First Name"
              type="text"
              placeholder="John"
              value={values.firstName}
              />
              </div>
              <StyledLabel>Last Name</StyledLabel>
              <div data-testid="lastnameField" className="inputField">  
              <StyledInput
              name="Last Name"
              type="text"
              placeholder="Doe"
              value={values.lastName}
              />
              </div>
              <StyledLabel>Email</StyledLabel>
              <div data-testid="emailField" className="inputField">  
              <StyledInput
              name="Email"
              type="email"
              placeholder="johndoe@example.com"
              value={values.email}
              />
              </div>
              <StyledLabel>Password</StyledLabel> 
              <div data-testid="passwordField" className="inputField"> 
              <StyledInput
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              />
              </div>
              <StyledButton type="submit" disabled={isSubmitting}>
                Sign up
            </StyledButton>
            </StyledFormField>
            )}
        </Formik>
        </div>
        </StyledSignupContainer>
    )
}