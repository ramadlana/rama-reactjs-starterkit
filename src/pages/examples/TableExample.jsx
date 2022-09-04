import { Card, Button } from "flowbite-react";
import { HiBackspace } from "react-icons/hi";
import React from "react";
import PaginationTable from "../../common/PaginationTable";
import ServerSideTable from "../../common/ServerSideTable";
import { useNavigate } from "react-router-dom";

function TableExample() {
  const navigate = useNavigate();
  // Example for data tables
  const tdata_example = {
    headers: [
      // Regular Data
      { type: "regular", title: "id" },
      { type: "regular", title: "name" },
      { type: "regular", title: "address" },
      //   Element Data
      {
        type: "element",
        title: "delete",
        el: function deleteUser(id) {
          return <a href={`/user/${id}`}>{id}</a>;
        },
      },
    ],
    data: [
      { id: 1, name: "name example", address: "address example2" },
      { id: 2, name: "name example2", address: "address example" },
    ],
  };

  return (
    <div>
      <div className="mb-2">
        <Button size={"xs"} color="gray" onClick={() => navigate(-1)}>
          <HiBackspace className="mr-3 h-4 w-4" />
          Back
        </Button>
      </div>
      <h1 className="text-xl font-bold mb-2">Table Examples</h1>
      <Card>
        {/* Table */}
        <ServerSideTable tdata={tdata_example}></ServerSideTable>
        {/* Pagination */}
        <PaginationTable></PaginationTable>
      </Card>
    </div>
  );
}

export default TableExample;
