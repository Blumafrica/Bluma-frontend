
import '../pages/login.css'
import { useState } from "react";
import React from 'react';
import { useFormik, Formik } from "formik";
import * as Yup from 'yup';
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Login() {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [openModal , setOpenModal] = React.useState(false)
    const handleOpen = (state) => setOpenModal(state)
    const handleClose = () => setOpenModal(false)


    const [initialValue, setInitialValue ] = useState({
        email: '',
        password : ''
    })
    const loginValidation = Yup.object({
        email: Yup.string().email("please enter an email").required("please enter email"),
        password: Yup.string("please enter password").required("please enter your password")
    })
    const {handleSubmit, handleBlur, values, errors, handleChange } = useFormik({
        initialValues: initialValue,
        validationSchema: loginValidation,
        onSubmit: (values) =>{
            console.log("user inputs => " ,values)
            logIn(values)
        }
    })
    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    async function logIn( userData ) {
        try {
            // const response = await fetch("http://localhost:8080/api/v1/user/login/", {
            const response = await fetch("/api/v1/user/login", {
                method: 'POST',
                headers : {"Content-Type" : "application/json"},
                body: JSON.stringify(userData)

            })
            if(response.ok){
                const {userId, userAuthority} = response.json()
                localStorage.setItem("userId", userId);
                localStorage.setItem("userAuthority" , userAuthority)

            }
        }catch(error){
            setError(error.message)
            console.log("error => ", error.message);
            handleOpen(true)
            console.log("modal state => ", openModal);
        }
    }



    return (
        <div className="login">
            <div className="login-section">
                <div className="background-image">
                    <p className='bluma-tag'>Bluma</p>
                    <p className='africa'>Africa</p>
                </div>
                {/* <div className='m-3'> */}
                <form onSubmit={handleSubmit}>
                    <p color="red" margin-left={'20px'}className="error">{errors.email}</p>
                    <input
                        class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl items-start"
                        type="email"
                        placeholder="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>
                    <br></br>
                    <p color="red" margin-left={'20px'} className="error">{errors.password}</p>
                    <input
                        class="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl items-center"
                        type="password"
                        placeholder="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></input>
                    <button className="submit" onClick={handleSubmit}>Submit</button>
                    {/* <p>Don't have an account? create account</p> */}
                    <Link to="/SignUp">
                        <p>Don't have an account? create account</p>

                    </Link>

                </form>
                {/* </div> */}
                {/* <Link to="/SignUp">
                    <p>Don't have an account? create account</p>

                </Link> */}
                {/* <p>Don't have an account? create account</p> */}
                
                {openModal ?
                    <Modal
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Error has occur
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                error message: {error}
                                {error}
                            </Typography>
                        </Box>
                    </Modal>
                    : null}
            </div>
        </div>
    )



}

export default Login;




