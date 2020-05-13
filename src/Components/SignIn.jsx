import React from 'react';
import { Formik } from 'formik';
import { StyledForm,
    StyledInput,
    StyledLabel,
    StyledSignupContainer,
    StyledButton,
    StyledLink 
} from '../Styles/StyledForm';

import SignupImage from '../Assets/hero.png';



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
        <div className="rightR">
        <div className="LoginForm">
        <Formik>
        <div className="AuthBox">
            <StyledForm>
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
              <div className="CreateAccnt">
                  New User?  <StyledLink to="/signup">Create Account</StyledLink> 
                </div> 
              <StyledButton type="submit">
                Sign In
            </StyledButton>
            </StyledForm>
            </div>
        </Formik>
        </div>
        </div>
        </div>
        </StyledSignupContainer>
    )
}