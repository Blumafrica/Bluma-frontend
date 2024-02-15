


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import '../pages/SignUp.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cookies from "js-cookie"

function SignUp() {
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const handleOpen = (state) => setOpenModal(state);

    const SignUpValidation = Yup.object({
        username: Yup.string().min(6).required("Please Enter a Username"),
        email: Yup.string().email("Please Enter a Valid Email").required("Please Enter an Email"),
        password: Yup.string().min(4).required("Please Enter a Password"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
    });

    const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: SignUpValidation,
        onSubmit: async (formValues) => {
            try {
                await signUp(formValues);
            } catch (err) {
                console.error(err);
                setError(err.message);
                handleOpen(true);
            }
        }
    });

    const navigateToHomePage = (param) => {
        navigate("/HomePage", { state: { value: param } });
    };

    const signUp = async (formValues) => {
        const url = 'http://localhost:8080/api/v1/user/register';
        const response = await axios.post(
            url,
            formValues,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        const { id, message, token, authority } = response.data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("User_Id", id);
        localStorage.setItem("authority", authority);
        Cookies.set("userId", id)
        Cookies.set("userAuthority", authority)
        Cookies.set("userToken", token)
        console.log(message);
        navigateToHomePage(id);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: '24px',
        p: 4,
    };

    return (
        <div className="sign-up-section">
            <div className="image">
                <p className="bluma-tag">Bluma</p>
                <p className="africa">Africa</p>
            </div>
            <div className="input-field">
                <form>
                    <p className="error">{errors.username}</p>
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl  space-x-2 md:space-x-8"
                        type="text"
                        placeholder="Username"
                        value={values.username}
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br/>

                    <p className="error">{errors.email}</p>
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <br/>

                    <p className="error">{errors.password}</p>
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <p className="error">{errors.confirmPassword}</p>
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <br />
                                         <input
                                            type="submit"
                                           className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
                                           onClick={handleSubmit}
                                            />
                </form>
                {openModal &&
                    <Modal
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Error has occurred
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {error}
                            </Typography>
                        </Box>
                    </Modal>
                }
            </div>
        </div>
    );
}

export default SignUp;
// // import React, { useState, useCallback } from "react";

// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useFormik, Form } from "formik";
// // import * as Yup from 'yup'
// // import '../pages/SignUp.css'
// // import { Modal } from "@mui/material";
// // import Box from '@mui/material/Box';

// // // import React, { useState, useCallback } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";
// // // import { useFormik } from "formik";
// // // import * as Yup from 'yup';
// // // import '../pages/SignUp.css'
// // // import { Modal } from "@mui/material";
// // // import Box from '@mui/material/Box';
// // // import Button from '@mui/material/Button';

// // import Typography from '@mui/material/Typography';

// // function SignUp() {
// //     const navigate = useNavigate();

// //     const [error, setError] = useState("")
// //     const [openModal, setOpenModal] = React.useState(false)
// //     const handleClose  = () => setOpenModal(false)
// //     const handleOpen = (state) => setOpenModal(state) 
// //   const [initialValue, setInitialValue] = useState({
// //     email: '',
// //     username: '',
// //     password: '',
// //     confirmPassword: ''
// //   })
// //   const [userData, setUserData] = useState({
// //     email: '',
// //     username: '',
// //     password: ''
// //   })


// //    const SignUpValidation = Yup.object({
// //     username: Yup.string().min(6).required("Please Enter a Username"),
// //     email: Yup.string().email("Please Enter a Valid Email").required("Please Enter an Email"),
// //     password: Yup.string().min(4).required("Please Enter a Password"),
// //     confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
// //   })
// //   const setValues = (value) => {
// //     setInitialValue(value )

// //   }

// //   const {handleBlur, handleChange, handleSubmit, values , errors} = useFormik({
// //     initialValues: initialValue,
// //     validationSchema: SignUpValidation,
// //     onSubmit: (values) =>{
// //       console.log("user inputs => ",values)
// //       setValues(values)
// //       signUp();
// //     }
// //   })
  

// //   const navigateToHomePage = useCallback((param) => {
// //     navigate("/HomePage", { state: { value: param } });
// //   }, [navigate]);

// //   async function signUp() {
// //      let url = 'http://localhost:8080/api/v1/user/register/'
// //       try {
// //         const response = await axios.post(
// //             // "https://blumafricabackend-production.up.railway.app/api/v1/user/register",
// //             url,
// //             {initialValue},
// //             {
// //               headers: {
// //                 "Content-Type": "application/json",
// //               },
// //               method:  'POST',
// //               withCredentials: true,
// //             }
// //         );
      

// //         const { id, message, token } = response.data;
// //         localStorage.setItem("authToken", token);
// //         console.log("Message -> ", message);
// //         console.log("Token -> ", token);
// //         console.log("Id -> ", id);
// //         navigateToHomePage(id);
// //       } catch (err) {
// //         console.error(err);
// //         setError(err.message)
// //         {handleOpen(true)}
// //         setOpenModal(true)
// //          console.log("the modal state => ", openModal);
// //       }
    
// //   }
// //   const style = {
// //     position: 'absolute' ,
// //     top: '50%',
// //     left: '50%',
// //     transform: 'translate(-50%, -50%)',
// //     width: 400,
// //     bgcolor: 'background.paper',
// //     border: '2px solid #000',
// //     boxShadow: 24,
// //     p: 4,
// //   };
  

// //   return (
// //       <div className="sign-up"> 
// //         <div className="image">
// //             {/* <p className="bluma-tag">Join</p> */}
// //             <p className="bluma-tag">Bluma</p>
// //             <p className="africa">Africa</p>
// //         </div>
// //         <div className="input-field">
// //           <form >

// //             <p className="error">{errors.username}</p>
// //             <input
// //                 className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl  space-x-2 md:space-x-8"
// //                 type="text"
// //                 placeholder="Username"
// //                 value={values.username}
// //                 name="username"
// //                 onChange={handleChange}
// //                 onBlur={handleBlur}
// //             />
// //             <br />

// //             <p className="error">{errors.email}</p>
// //             <input
// //                 className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
// //                 type="email"
// //                 placeholder="Email"
// //                 name="email"
// //                 value={values.email}
// //                 onBlur={handleBlur}
// //                 onChange={handleChange}/>
// //             <br />

// //             <p className="error">{errors.password}</p>
// //             <input
// //                 className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
// //                 type="password"
// //                 placeholder="Password"
// //                 name="password"
// //                 value={values.password}
// //                 onChange={handleChange}
// //                 onBlur={handleBlur}
// //             />
// //             <p className="error">{errors.confirmPassword}</p>
// //            {/* < input
// //             // <br /> */}
           
// //             <input
// //                 type="submit"
// //                 className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
// //                 onClick={handleSubmit}
// //             />
// //           </form>
// //           {
// //             openModal ? 
// //             <Modal
// //             open={openModal}
// //             onClose={handleClose}
// //             aria-labelledby="modal-modal-title"
// //             aria-describedby="modal-modal-description"
// //           >
// //             <Box sx={style}>
// //               <Typography id="modal-modal-title" variant="h6" component="h2">
// //                 Error has occur
// //               </Typography>
// //               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
// //                 error message: {error}
// //               </Typography>
// //             </Box>
// //           </Modal>
// //           :null
// //           }
          
// //         </div>
        
// //       </div>
// //   );

   



// // }

// // export default SignUp;


// import React, { useState, useCallback } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from 'yup';
// import '../pages/SignUp.css';
// import Box from '@mui/material/Box';
// import { createStore } from "redux";
// import Typography from '@mui/material/Typography';
// import Cookies from "js-cookie";
// import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// function SignUp() {
//     const navigate = useNavigate();

//     const [error, setError] = useState("");
//     const [openModal, setOpenModal] = useState(false);
//     const handleClose = () => setOpenModal(false);
//     const handleOpen = (state) => setOpenModal(state);

//     const initialValue = {
//       email : '',
//       username : '',
//       password: '',
//       confirmPassword : ''
//     }

//     const SignUpValidation = Yup.object({
//         username: Yup.string().min(6).required("Please Enter a Username"),
//         email: Yup.string().email("Please Enter a Valid Email").required("Please Enter an Email"),
//         password: Yup.string().min(4).required("Please Enter a Password"),
//         confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
//     });
    

//     const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
//         initialValues: {
//             email: '',
//             username: '',
//             password: '',
//             confirmPassword: ''
//         },
//         validationSchema: SignUpValidation,
//         onSubmit: async (formValues) => {
//             try {
//                 await signUp(formValues);
//             } catch (err) {
//                 console.error(err);
//                 setError(err.message);
//                 handleOpen(true);
//             }
//         }
//     });

//     // const navigateToHomePage = (param) => {
//     //     navigate("/HomePage", { state: { value: param } });
//     // };

//   // const {handleBlur, handleChange, handleSubmit, values , errors} = useFormik({
//   //   initialValues: initialValue,
//   //   validationSchema: SignUpValidation,
//   //   onSubmit: (values) =>{
//   //     console.log("user inputs => ",values)
//   //     setValues(values)
//   //     signUp();
//   //   }
//   // })
  

//   const navigateToHomePage = useCallback((param) => {
//     navigate("/HomePage", { state: { value: param } });
//   }, [navigate]);

//   // async function signUp() {
//   //    let url = 'http://localhost:3000/api/v1/user/register'
//         const signUp = async (formValues) => {
//           try {

//         const url = 'http://localhost:8080/api/v1/user/register';
//         const response = await axios.post(
//             url,
//             initialValue,
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 withCredentials: true,
//             }
//         );

//         const { id, message, token, authority } = response.data;
//         localStorage.setItem("authToken", token);
//         console.log("Message -> ", message);
//         console.log("Token -> ", token);
//         console.log("Id -> ", id);
//         Cookies.set("userId", id )
//         Cookies.set("userToken", token)
//          navigateToHomePage(id);
//       } catch (err) {
//         console.error(err);
//         setError(err.message)
//         {handleOpen(true)}
//         setOpenModal(true)
//          console.log("the modal state => ", openModal);
//       }
    
//   }
//   const style = {
//     position: 'absolute' ,
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };
  

//   return (
//       <div className="sign-up-section"> 
//         <div className="image">
//             {/* <p className="bluma-tag">Join</p> */}
//             <p className="bluma-tag">Bluma</p>
//             <p className="africa">Africa</p>
//         </div>
//         <div className="input-field">
//           <form >

//             <p className="error">{errors.username}</p>
//             <input
//                 className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl  space-x-2 md:space-x-8"
//                 type="text"
//                 placeholder="Username"
//                 value={values.username}
//                 name="username"
//                 onChange={handleChange}
//                 // onChange={(e) => setInitialValue({ ...initialValue, username: e.target.value})}
//                 onBlur={handleBlur}
//             />
//             <br />

//             <p className="error">{errors.email}</p>
//             <input
//                 className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 value={values.email}
//                 onBlur={handleBlur}
//                 onChange={handleChange}/>
//             <br />

//             <p className="error">{errors.password}</p>
//             <input
//                 className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//             />
//             <p className="error">{errors.confirmPassword}</p>
//            < input
//                         className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
//                         type="password"
//                         placeholder="Confirm Password"
//                         name="confirmPassword"
//                         value={values.confirmPassword}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                     />
//             <br />
           
//             <input
//                 type="submit"
//                 className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-purple-400 text-center text-xl"
//                 onClick={handleSubmit}
//             />
//           </form>
//           {
//             openModal ? 
//             <Modal
//             open={openModal}
//             // onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//                <p className="cancel" onClick={handleClose}>x</p>
//               <Typography id="modal-modal-title" variant="h6" component="h2">
//                 Error has occur
//               </Typography>
//               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                 {error}
//               </Typography>
//             </Box>
//           </Modal>
//           :null
//           }
          
//         </div>
        
//       </div>
//   );

   



//         }
// export default SignUp;


