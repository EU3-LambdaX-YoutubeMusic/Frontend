import React from 'react';
import { Form, Formik } from 'formik';
import { StyledFormField, StyledInput, StyledLabel, StyledSignupContainer, StyledButton } from '../Styles/StyledForm';

import SignupImage from '../Assets/earphone.png';

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
        <Formik>
            <StyledFormField>
              <StyledLabel>First Name</StyledLabel> 
              <div data-testid="firstnameField" className="inputField"> 
              <StyledInput
              name="First Name"
              type="text"
              placeholder="John"
              />
              </div>
              <StyledLabel>Last Name</StyledLabel>
              <div data-testid="lastnameField" className="inputField">  
              <StyledInput
              name="Last Name"
              type="text"
              placeholder="Doe"
              />
              </div>
              <StyledLabel>Email</StyledLabel>
              <div data-testid="emailField" className="inputField">  
              <StyledInput
              name="Email"
              type="email"
              placeholder="johndoe@example.com"
              />
              </div>
              <StyledLabel>Password</StyledLabel> 
              <div data-testid="passwordField" className="inputField"> 
              <StyledInput
              name="password"
              type="password"
              placeholder="Enter your password"
              />
              </div>
              <StyledButton type="submit">
                Sign up
            </StyledButton>
            </StyledFormField>
        </Formik>
        </div>
        </StyledSignupContainer>
    )
}