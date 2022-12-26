import React from "react";
import { Alert, Button, Card } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function ErrorPage({ error }) {
  const navigate = useNavigate();
  return (
    <div className="m-20">
      <Card>
        <Alert color="failure" icon={HiInformationCircle}>
          <span>
            <span className="font-medium">Error {error.status} </span>{" "}
            {error.status === 401
              ? "You must logged in to access this page"
              : error.data.message}
          </span>
        </Alert>
        <div className="">
          <Button
            gradientDuoTone="cyanToBlue"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default ErrorPage;
