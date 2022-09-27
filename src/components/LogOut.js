import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function LogOut() {
  const navigate = useNavigate();
  const hadler = () => {
    navigate("/Log");
    localStorage.removeItem('login');
  };
 
  return (
    <div>
      <Button variant="dark" onClick={() => hadler()}>LogOut</Button>
    </div>
  );
}

export default LogOut;