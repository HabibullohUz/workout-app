import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from "../redux/reducers/userSlice";

function Login() {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:5001/user/login", user)
      .then((res) => {
        console.log(res.data);
        dispatch(login(res.data))
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="wrapper d-flex align-items-center bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            <h2 className="text-center text-light mb-4">LOGIN</h2>
            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <input type="email" name="email" required placeholder="Email" value={user.email || ""} onChange={handleChange} />
                <input type="password" name="password" required placeholder="Password" value={user.password || ""} onChange={handleChange} />
                <button type="submit">Submit</button>
                <div className="text-center mt-5">
                  <p className='text-muted'>Not a member? <Link to="/signup" className='text-decoration-underline text-light px-1'>Sign up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
