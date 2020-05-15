import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, "must be at least 2 characters")
        .max(127, "must be shorter than 127")
        .required("this is a required field"),
    lastname: Yup.string()
        .min(2, "must be at least 2 characters")
        .max(127, "must be shorter than 127")
        .required("this is a required field"),
    email: Yup.string()
        .email("must be a valid email address")
        .max(127, "must be shorter than 127")
        .required("this is a required field"),
    password: Yup.string()
        .min(8, "must be at least 8 caharacters")
        .max(127, "must be shorter than 127")
        .required("this is a required field"),

});