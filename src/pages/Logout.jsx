import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  localStorage.clear();
  return (
    <>
      Successfully logout
      <Button onClick={() => navigate("/login")}>Re Login</Button>
    </>
  );
}

export default Logout;
