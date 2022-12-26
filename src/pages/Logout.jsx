import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Card } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

function Logout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="m-20">
        <Card>
          <Alert color="info" icon={HiInformationCircle}>
            <span className="m-2">
              Logout successfully, you can relogin using login button bellow
            </span>
          </Alert>
          <Button onClick={() => navigate("/login")}>Re Login</Button>
        </Card>
      </div>
    </>
  );
}

export default Logout;
