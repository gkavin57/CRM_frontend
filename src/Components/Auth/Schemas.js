import * as yup from "yup";
const PasswordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const Authschema = yup.object().shape({
  FirstName: yup.string().required("Requird"),
  LastName: yup.string().required("Requird"),
  Email: yup.string().email("Please enter a valid email").required("Requird"),
  Password: yup
    .string()
    .min(5)
    .matches(PasswordRules, { message: "Please create a stronger password" })
    .required("Requird"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Password must match")
    .required("Requird"),
});
