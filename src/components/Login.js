import React, {useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const navigation = useNavigate();
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [user, setUser] = useState([]);
    const token = localStorage.getItem("register");
    const check = async () => {
        const url = `https://reqres.in/api/login`;
        axios
          .post(url, {
            email: email,
            password: pass,
          })
          .then((responce) => setUser(responce.data?.token));
        console.log("Registered", user);
        localStorage.setItem("register", user);
        if(token ==user){
    
            navigation('/user');
        }
      };
      
    return (
        <>
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
        </>
    )
}
