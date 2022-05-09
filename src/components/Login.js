import React, { useState } from 'react'
import '../Logincss.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const host = "http://localhost:5000"
    const [creds, setCreds] = useState({ "email": "", "password": "" })
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
        console.log(creds)
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await Axios.post(`${host}/api/auth/loginuser`, creds, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            console.log(response);
            navigate("/");
        })
            .catch(function (error) {
                alert("invalid credentials")
            });
    }
    return (
        <>
            <div className="logincss" style={{ background: "linear-gradient(90deg, #C7C5F4, #776BCC)" }}>
                <div className="container" >
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login" onSubmit={handleOnSubmit}>
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input type="email" className="login__input" value={creds.email} name='email' onChange={handleOnChange} placeholder="Email" />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"></i>
                                    <input type="password" className="login__input" value={creds.password} name='password' onChange={handleOnChange} placeholder="Password" />
                                </div>
                                <button className="button login__submit" >
                                    <span className="button__text">Log In Now</span>
                                    <i className="button__icon fas fa-chevron-right"></i>
                                </button>
                            </form>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4 d-none"></span>
                            <span className="screen__background__shape screen__background__shape3 d-none"></span>
                            <span className="screen__background__shape screen__background__shape2 d-none"></span>
                            <span className="screen__background__shape screen__background__shape1 "></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login