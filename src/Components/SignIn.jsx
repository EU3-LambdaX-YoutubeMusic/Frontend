import React from 'react';
import { Formik } from 'formik';
import { StyledFormField, StyledInput, StyledLabel, StyledSignupContainer, StyledButton } from '../Styles/StyledForm';

import SignupImage from '../Assets/earphone.png';



export default function LoginForm (props) {
    return (
        <StyledSignupContainer>
        <div className="left">
        <h1>Welcome Back,</h1>
        <h2>Sign in to continue</h2>
        <div className="img-cont">
          <img src={SignupImage} alt="Earphones" />
        </div>
        </div>
        <div className="right">
        <Formik>
            <StyledFormField>
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
              <p>
                  New User? Create Account 
              <StyledButton type="submit">
                Sign In
            </StyledButton>
            </p>
            </StyledFormField>
        </Formik>
        </div>
        </StyledSignupContainer>
    )
}