import React from "react";
import { Alert, Spinner, Card } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

function LoadingPage({ message }) {
  return (
    <div className="m-20">
      <Card>
        <Alert color="info" icon={HiInformationCircle}>
          <span className="m-2">{message ? message : "Please wait"}</span>
          <Spinner aria-label="Default status example" />
        </Alert>
      </Card>
    </div>
  );
}

export default LoadingPage;
