import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Login from './Login';

export default function Res() {
    const navigation = useNavigate();
    const [email, setemail] = useState(" ");
    const [pass, setpass] = useState("");
    // const [user, setUser] = useState([]);
    function check(){
        if(email.length <=0 && pass <=0)
        {
            alert("please enter valid data");
        }
        else{
            console.log(email);
            console.log(pass);
            localStorage.setItem('email',email);
            localStorage.setItem('pass',pass);
            navigation('/Log');            
        }
    }
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
            <button type="submit" onClick={()=>{navigation('/Log')}} className="btn btn-primary mx-3">Login</button>
        </div>
    )
}
