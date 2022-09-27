import axios from "axios";
import React, { useState } from "react";
import LogOut from "./LogOut";

function EditUser() {
    const [name, setName] = useState();
    const [job, setJob] = useState();
    const [data, setData] = useState();

    const submit = () => {
        const url = `https://reqres.in/api/users/2`;
        axios
            .put(url, {
                "name": name,
                "job": job,
            })
            .then((response) => setData(response.data));
        console.log(data);
    };


    return (
        <>
            <div className="mt-2">
                <LogOut />
                <div className='container'>
                    <div className="mb-3">
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                        ></input>
                        <input
                            type="text"
                            onChange={(e) => setJob(e.target.value)}
                            placeholder="Enter job"
                        ></input>
                        <button onClick={() => submit()}>Submit</button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditUser;