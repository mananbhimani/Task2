import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LogOut from './LogOut';
export default function Users() {
    const [users, Setdata] = useState([]);
    var nav = useNavigate();
    // var userid = localStorage.getItem('id')
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((res) => {
                Setdata((res.data?.data))
                console.log(res.data);
            })
    }, [])
    const styyy = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"

    }
    var job = localStorage.getItem('job');

    return (
        <><div style={styyy}>
            {
                
                users && users.length > 0 && users.map((data) => {
                    return (
                        <div className="row row-cols-1 row-cols-md-1 g-4  py-5" >
                            <div className="col">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={data?.avatar} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data?.first_name}{data?.last_name}</h5>
                                        <p className="card-text">{data?.email}</p>
                                        {/* <p className="card-text">{job}</p> */}

                                        <button type="button" className="btn btn-dark mx-1" onClick={() => { nav('/Edit') }}>Edit</button>
                                        <button type="button" className="btn btn-dark mx-1" onClick={() => { nav('/Delet') }}>Delet</button>
                                    </div>
                                    {localStorage.setItem('name', data?.first_name)}
                                    {localStorage.setItem('email', data?.email)}
                                    <LogOut/>
                                </div>
                            </div>
                        </div>

                    )

                })
            }
            
        </div>
        </>
    )
}
