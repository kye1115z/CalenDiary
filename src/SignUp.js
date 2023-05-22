import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SignupModal from "./Pages/SignupModal";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
// 필수입력값들이 들어오지않았을때 회원가입되지않게하는 부분 작성해야함

const SignUp = () => {
    const [emailErrors, setEmailErrors] = useState(true);
    const [passwordErrors, setPasswordErrors] = useState(true);
    const [nameErrors, setNameErrors] = useState(true);
    const [sendData, setSendData] = useState({
        email: "",
        password: "",
        name: "",
    });

    const checkName = (e) => {
        var nameRegExp = /^[가-힣a-zA-Z]+$/;
        setNameErrors(!nameRegExp.test(e.target.value));
    };

    const checkEmail = (e) => {
        var emailRegExp =
            /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        setEmailErrors(!emailRegExp.test(e.target.value));
    };

    const checkPassword = (e) => {
        var passwordRegExp =
            /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
        setPasswordErrors(!passwordRegExp.test(e.target.value));
    };

    const onchange = (e) => {
        setSendData({
            ...sendData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <ResponsiveAppBar />
            <div className="SignUp">
                <div>
                    <div className="head">
                        <h2>Let's get started now !</h2>
                        <h5>Invite the world events</h5>
                    </div>
                    <form className="signup_form">
                        <TextField
                            className="txt_field"
                            value={sendData.name}
                            label="Name"
                            required
                            name="name"
                            margin="normal"
                            fullWidth
                            autoFocus
                            error={nameErrors && sendData.name !== ""}
                            onChange={(e) => {
                                onchange(e);
                                checkName(e);
                            }}
                            helperText={
                                nameErrors && sendData.name !== ""
                                    ? "Correct name is required"
                                    : null
                            }
                        />
                        <TextField
                            className="txt_field"
                            value={sendData.email}
                            label="Email"
                            required
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            fullWidth
                            error={emailErrors && sendData.email !== ""}
                            onChange={(e) => {
                                onchange(e);
                                checkEmail(e);
                            }}
                            helperText={
                                emailErrors && sendData.email !== ""
                                    ? "Correct email is required"
                                    : null
                            }
                        />
                        <TextField
                            className="txt_field"
                            value={sendData.password}
                            label="Password"
                            type="password"
                            required
                            name="password"
                            autoComplete="current-password"
                            margin="normal"
                            fullWidth
                            error={passwordErrors && sendData.password !== ""}
                            onChange={(e) => {
                                onchange(e);
                                checkPassword(e);
                            }}
                            helperText={
                                passwordErrors && sendData.password !== ""
                                    ? "Correct password is required"
                                    : null
                            }
                        />

                        <SignupModal
                            isError={
                                !nameErrors && !emailErrors && !passwordErrors
                            }
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
