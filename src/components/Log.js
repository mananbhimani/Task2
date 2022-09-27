import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Log() {


    const navigation = useNavigate();
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const location = window.location;
    
    
    function check() {
        if (email ==0 && pass ==0) {
            alert("plz enter valid data");
        }
        else {
            navigation('/User');
            localStorage.setItem('login',email);
        }
    }
    var log = localStorage.getItem('login');
    
    useEffect(() => {
        console.log(location);
        console.log(log);
      if(log != null && location.pathname == '/Log')
      {
        location.replace('/user');
      }
    }, [location]);
    // var ema = localStorage.getItem('email');
    // var pas = localStorage.getItem('pass');
    // // const [user, setUser] = useState([]);
    // function check() {
    //     if (email === ema && pass === pas) {
    //         localStorage.setItem('login', email, pass);
    //         navigation('/User');
    //     }
    //     else {
    //         alert("please entewr valid detail");
    //     }

    // }
    // useEffect(() => {
    //     if(localStorage.getItem('email')){
    //       history.push('./User');
    //     }
    //   }, [])
    // useEffect(()=>{
    //     localStorage.setItem('email',0);
    //     localStorage.setItem('pass',0)
    // },[check])
    // function preventback() {
        // window.history.forward();
        // URL.history.forward('/User');
        // URL.window.history.forward();
    // } setTimeout(preventback(), 0);



    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" >Email address</label>
                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" >Password</label>
                    <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" onClick={ check} className="btn btn-primary">Submit</button>
                {/* <button type="submit" onClick={() => { navigation('/Res') }} className="btn btn-primary mx-3">Register</button> */}
            </div>
        </>
    )
}
