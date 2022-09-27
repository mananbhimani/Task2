// import axios from 'axios';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
  // const [users, Setdata] = useState([]);
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  // var nam = localStorage.getItem('name');
  // const url = "https://reqres.in/api/users/2";

  const submit = () => {

    if(name && job <=0)
    {
      alert("please enter valid iteam");
    }
    else{
      localStorage.setItem('name',name);
      localStorage.setItem('job',job);
      nav('/User')

    }
    // axios
    //   .put(url, {
    //     "name": name,
    //     "job": job,
    //   })
    //   .then((response) => Setdata(response.data));
    // console.log(users);
  };
  // const styyy = {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "space-evenly"

  // }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"></input>
      <input
        type="text"
        onChange={(e) => setJob(e.target.value)}
        placeholder="Enter job"></input>
      <button onClick={() => submit()}>Submit</button>

    </>
  )
}
