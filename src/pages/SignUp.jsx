import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import '../pages/SignUp.css'
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SignUp() {
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const SignUpValidation = Yup.object({
        username: Yup.string().min(6).required("Please Enter a Username"),
        email: Yup.string().email("Please Enter a Valid Email").required("Please Enter an Email"),
        password: Yup.string().min(4).required("Please Enter a Password"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
    });

    const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: SignUpValidation,
        onSubmit: async (values) => {
            console.log("user inputs => ", values);
            try {
                const response = await axios.post(
                    'http://localhost:8080/api/v1/user/register',
                    values,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );

                const { id, message, token } = response.data;
                localStorage.setItem("authToken", token);
                console.log("Message -> ", message);
                console.log("Token -> ", token);
                console.log("Id -> ", id);
                navigateToHomePage(id);
            } catch (err) {
                console.error(err);
                setError(err.message);
                handleOpen(true);
            }
        },
    });

    const navigateToHomePage = useCallback((param) => {
        navigate("/HomePage", { state: { value: param } });
    }, [navigate]);

    const handleClose = () => setOpenModal(false);
    const handleOpen = () => setOpenModal(true);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className="sign-up">
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
                    <br />

                    <p className="error">{errors.email}</p>
                    <input
                        className="m-2 p-4 w-4/5 rounded-xl border-2 border-purple-400 bg-transparent text-center text-xl"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                    <br />

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

                    {/*<Button*/}
                    {/*    variant="contained"*/}
                    {/*    className="m-2 p-4 w-4/5 rounded-xl bg-purple-400 text-center text-xl"*/}
                    {/*    onClick={handleSubmit}*/}
                    {/*>*/}
                    {/*    Submit*/}
                    {/*</Button>*/}
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
