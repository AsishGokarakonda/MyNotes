import React from 'react'
import '../Logincss.css'
const Login = () => {
    return (
        <>
        <div className="logincss"style={{background: "linear-gradient(90deg, #C7C5F4, #776BCC)"	}}>
        <div className="container" >
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="Email" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" />
                        </div>
                        <button className="button login__submit">
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