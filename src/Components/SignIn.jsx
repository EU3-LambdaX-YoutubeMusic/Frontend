import React from 'react';
import { login } from '../services/UsersAuth';
import Spinner from './Spinner';
import { StyledForm,
    StyledInput,
    StyledLabel,
    StyledSignupContainer,
    StyledButton,
    StyledLink 
} from '../Styles/StyledForm';

import SignupImage from '../Assets/hero.png';


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        loading: false,
        error: false,
      };
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        loading: true
      })
  
      const user = {
        email: this.state.email,
        password: this.state.password
      }
  
      login(user)
        .then(() => {
          this.setState({
            loading: false
          })
        })
        .then(() => {
          this.props.setLoggedIn(true);
          this.props.history.push('/playlist');
        })
        .catch(() => {
          this.setState({
            email: '',
            password: '',
            loading: false,
            error: true,
          });
          console.log('boo!')
        })
  
    }
  
  
    render() {
  
      let error;
      if (this.state.error) {
        error = "Invalid Login Details"
      } else {
        error = null;
      }
  
      if (this.state.loading) {
        return (
            <div>
                  <Spinner />
            </div>
          )
      } else {
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
        <div className="AuthBox">
            <StyledForm >
              <StyledLabel>Email</StyledLabel>
                  <StyledInput
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
              <StyledLabel>Password</StyledLabel> 
                  <StyledInput
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
              <div className="CreateAccnt">
                  New User?  <StyledLink to="/signup">Create Account</StyledLink> 
                </div> 
              <StyledButton className="button" type="button" onClick={this.handleSubmit}>
                Sign In
            </StyledButton>
            <h6 style={{ 'color': 'red' }}>{error}</h6>
            </StyledForm>
            </div>
        </div>
        </div>
        </div>
        </StyledSignupContainer>
    )
   }
 }
}

export default Login;

