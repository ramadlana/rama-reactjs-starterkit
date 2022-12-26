import React from "react";

import { Alert, Breadcrumb, Button, Card } from "flowbite-react";
import {
  HiAdjustments,
  HiCloudDownload,
  HiHome,
  HiInformationCircle,
  HiTable,
} from "react-icons/hi";

export default function Dashboard() {
  return (
    <>
      <div className="m-20">
        <div className="mb-2">
          {/* Other Sample Component */}
          <Button.Group>
            <Button size={"xs"} color="gray">
              <HiTable className="mr-3 h-4 w-4" /> Table Example
            </Button>
            <Button size={"xs"} color="gray">
              <HiAdjustments className="mr-3 h-4 w-4" /> Other Example
            </Button>
            <Button size={"xs"} color="gray">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Other Example
            </Button>
          </Button.Group>
        </div>
        <h1 className="text-xl font-bold mb-2">
          This is Sample Flowbite Page Component
        </h1>
        <Card>
          {/* Breadcump */}

          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="#" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
            <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
          </Breadcrumb>
          <Alert color="info" icon={HiInformationCircle}>
            <span className="m-2">Dashboard member area , success login</span>
          </Alert>
        </Card>
      </div>
    </>
  );
}
