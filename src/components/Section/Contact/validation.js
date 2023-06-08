import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("E-mail must be valid")
    .required("E-mail is required"),
  message: Yup.string().required("Message is required"),
});

export default validationSchema;
