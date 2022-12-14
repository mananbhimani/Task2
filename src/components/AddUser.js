import axios from "axios";
import React, { useState,useEffect } from "react";
import LogOut from "./LogOut";
// import { useForm } from "react-hook-form";

function AddUser() {
    // const { register } = useForm({ shouldUseNativeValidation: true });

    const [name, setName] = useState();
    const [job, setJob] = useState();
    const [user, setUser] = useState();

    const submit = () => {
        const url = `https://reqres.in/api/users`;
        axios
            .post(url, {
                name: name,
                job: job,
            })
            .then((response) => setUser(response.data));
        console.log("Success", user);
    };
    

    return (
        <>
            <div className="mt-2">
                <LogOut />
                {/* <input
        {...register("firstName", { required: "Please enter your first name." })} // custom message
      /> */}
                <div className='container'>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
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

export default AddUser;