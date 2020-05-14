// import axios from "axios";

// export const submitHandler = (values, actions) => {
    
//   const newUser = {
//     firstname: values.firstname,
//     lastname: values.lastname,
//     email: values.email,
//     password: values.password
//   };

//   axios()
//     .post("/signup", newUser)
//     .then(() => {
//       actions.setSubmitting(false);
//     })
//     .catch(err => {
//       actions.setSubmitting(false);
//     });
// };


// import React, { useState } from "react";
// import { useHistory, Link } from "react-router-dom";
// import axios from "axios";
// import { postRequest } from "./helpers/utilities";
// import { notification } from "antd";
// import { StyledFormField, StyledInput } from "./styles/StyledForm";
// import "./Styles.scss";

// export default function Signup() {
//   const [user, setUser] = useState({ name: "", username: "", password: "" });
//   let history = useHistory();
//   const onChangeHandler = e => {
//     const value = e.target.value;
//     const name = e.target.name;
//     setUser(prev => ({ ...prev, [name]: value }));
//     console.log(user);
//   };
//   const loginHandler = async event => {
//     event.preventDefault();
//     if (
//       user.username.length > 1 &&
//       user.password.length > 1 &&
//       user.name.length > 1
//     ) {
//       try {
//         const response = await axios.post("http://localhost:5000/signup", user);
//         console.log("response: ", response);
//         if (response.status) {
//           localStorage.setItem("user-token", response.data.token);
//           history.push("/dashboard");
//           return notification.success({
//             message: "Success",
//             description: "Login Successful"
//           });
//         }
//         return notification.error({
//           message: "Error",
//           description: response
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     }
    
//     console.log("submitting form");
//   };
//   return (
//     <div>
//       <h3 className="page-title">Create an account</h3>
//       <h4>In ~ 1 Minutes</h4>
//       <div className="form-container">
//         <div className="form-box">
//           <form action="" onSubmit={loginHandler}>
//             <StyledFormField>
//               <div className="input-field">
//                 <label className="required">Name</label>
//                 <StyledInput
//                   type="text"
//                   name="name"
//                   onChange={onChangeHandler}
//                   placeholder="Shola Ayeni"
//                 />
//               </div>
//             </StyledFormField>
//             <StyledFormField>
//               <div className="input-field">
//                 <label className="required">Username</label>
//                 <StyledInput
//                   type="text"
//                   name="username"
//                   onChange={onChangeHandler}
//                   placeholder="ayenishola"
//                 />
//               </div>
//             </StyledFormField>
//             <StyledFormField>
//               <div className="input-field">
//                 <label className="required">Password</label>
//                 <StyledInput
//                   type="password"
//                   name="password"
//                   onChange={onChangeHandler}
//                   placeholder="**********"
//                 />
//               </div>
//             </StyledFormField>
//             <div className="cta">
//               <p className="action">
//                 Have an account?<Link to="/signin"> sign in</Link>
//               </p>
//               <div className="form-field action">
//                 <div className="input-field">
//                   <StyledInput id="submit" type="submit" value="Sign Up" />
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }