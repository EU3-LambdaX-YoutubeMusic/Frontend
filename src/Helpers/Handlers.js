import axios from "axios";

export const submitHandler = (values, actions) => {
    
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
};
