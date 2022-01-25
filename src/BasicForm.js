import { maxHeight } from "@mui/system";
import {useFormik} from "formik";
import * as yup from 'yup';

// // if validate passes then move to on submit
// const validateForm =(values)=>{
//   const errors ={}
//   console.log("validateForm", values);
//   //email must be minimum five chachters 
//   if(values.email.length <5){
//     errors.email ="Please Provide a Longer Email";
//   } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//     errors.email = "Invalid email address"; 
//   }

//   if(values.password.length < 8){
//     errors.password="Please Provide a longer Password";
//   } else if(values.password.length>12){
//     errors.password= "Please Provide a shorter password"
//   }
//   console.log(errors);
//   return errors;
// };

const formValidationSchema = yup.object({
  
    email:yup.string().min(5, "Need a bigger email")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Pattern not matched"
      ).required("Why not fill this email? "),

    password:yup
    .string()
    .min(8, "need a bigger password")
    .max(12, "too much for a password")
    .required("Why not fill this email? "),

});


export function BasicForm() {
const {handleSubmit, values, handleChange, handleBlur, touched, errors} =  useFormik({
   initialValues : {email:"", password:""},
   //validate:validateForm,
   validationSchema: formValidationSchema,
   onSubmit:(values)=>{
     console.log("onSubmit", values)
   },
   
 });
 console.log("touched",touched)
  return (
      <form onSubmit={handleSubmit}>
          <input
             id = "email"
             name ="email"
             type = "email" 
             value = {values.email}
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="Enter your email"/>

             {touched.email && errors.email ? errors.email : ""}

          <input
             id = "password"
             name ="password"
             type = "password" 
             value = {values.password}
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="Enter your Password"/>

            {touched.password && errors.password ? errors.password : ""}
          
          <button type = "submit">Submit</button>
      </form>
  );
}
