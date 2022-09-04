import { Card, Button } from "flowbite-react";
import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { Outlet, useNavigate } from "react-router-dom";

function MenuGroup() {
  const navigate = useNavigate();
  return (
    <div className="m-5">
      <div className="mb-2">
        {/* Other Sample Component */}
        <Button.Group>
          <Button
            size={"xs"}
            color="gray"
            onClick={() => navigate("/example/menugroup")}
          >
            <HiOutlineViewGrid className="mr-3 h-4 w-4" /> Others Home
          </Button>

          <Button
            size={"xs"}
            color="gray"
            onClick={() => navigate("recoilpageone")}
          >
            <HiOutlineViewGrid className="mr-3 h-4 w-4" /> Recoil set
          </Button>

          <Button
            size={"xs"}
            color="gray"
            onClick={() => navigate("recoilpagetwo")}
          >
            <HiOutlineViewGrid className="mr-3 h-4 w-4" /> Recoil Get
          </Button>
        </Button.Group>
      </div>
      <Card>
        <Outlet></Outlet>
      </Card>
    </div>
  );
}

export default MenuGroup;
