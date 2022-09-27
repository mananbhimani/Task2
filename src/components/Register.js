import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigation = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get('https://reqres.in/api/register')
      .then((res) => {
        setUser((res.data?.data))
        console.log(res.data);
      })
  }, [])
  const check = async () => {
    axios.get('https://reqres.in/api/register')
      .then((res) => {
        console.log(res.data?.email);
        if(email == res.data?.email)
        setUser((res.data?.email))
        localStorage.setItem('email',email);
        console.log(res.data);
      })
    console.log("Registered", user);
    localStorage.setItem("register", user);
    if (user === 'QpwL5tke4Pnpja7X4') {

      navigation('/Login');
      localStorage.setItem('pass', pass);
    }
  };



return (

  <div className='container'>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} className="form-control" id="exampleInputPassword1" />
    </div>

    <button type="submit" onClick={check} className="btn btn-primary">Submit</button>
  </div>
)
}
