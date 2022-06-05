import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ "name": "", "email": "", "password": "" })
  const host = "http://localhost:5000"
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    console.log(credentials)
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    await Axios.post(`${host}/api/auth/createuser`, credentials, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function (response) {
      console.log(response);
      props.promptAlert("Signed up successfully", "success")
      localStorage.setItem("token", response.data.token)
      navigate("/login");
    })
      .catch(function (error) {
        console.log(error)
        props.promptAlert(error.response.data.error, "danger")
      });
  }
  return (
    <>
      <div className="container my-3">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >Name</label>
            <input type="text" onChange={handleOnChange} name="name" minLength={3} required value={credentials.name} className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" onChange={handleOnChange} name="email" required value={credentials.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" required className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" minLength={5} required name="password" value={credentials.password} onChange={handleOnChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Signup