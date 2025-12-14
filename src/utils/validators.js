import * as Yup from "yup";

// ===============================
// CONTACT FORM VALIDATION
// ===============================
export const contactFormSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "First name too short")
    .required("First name is required"),

  lastname: Yup.string().optional(),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  course: Yup.string().optional(),
  college: Yup.string().optional(),
});

// ===============================
// REFER A FRIEND FORM VALIDATION
// ===============================
export const referralFormSchema = Yup.object().shape({
  yourname: Yup.string()
    .min(2, "Name too short")
    .required("Your name is required"),

  youremail: Yup.string()
    .email("Invalid email")
    .required("Your email is required"),

  friendname: Yup.string()
    .min(2, "Friend name too short")
    .required("Friend name is required"),

  friendemail: Yup.string()
    .email("Invalid email")
    .required("Friend email is required"),

  message: Yup.string().optional(),
});
