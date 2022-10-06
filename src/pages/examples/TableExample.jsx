import { Card, Button } from "flowbite-react";
import { HiBackspace } from "react-icons/hi";
import React from "react";
import ServerSideTable from "../../common/ServerSideTable";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { callerAxiosGet } from "../../middleware/callerAxios";

function TableExample() {
  const navigate = useNavigate();

  // Table Property
  const [tableProperty, setTableProperty] = useState({
    paginationPage: 1, // used to display pagination in frontend
    page: 0, // used to calculated skip page to backen
    maxPerpage: 10, //
    sortBy: "id",
    sortMethod: "asc",
    searchBy: "name",
    searchValue: "", // search text
    sortOptionItems: ["id", "name", "address"], // select option for sortby and search by
    searchOptionItems: ["id", "name", "address"],
  });

  // Table constructor
  const tableConstructor = {
    headers: [
      // Regular Data
      { type: "regular", title: "id" },
      { type: "regular", title: "name" },
      { type: "regular", title: "address" },
      //   Element Data. its return such as button, a link, etc
      {
        type: "element",
        title: "delete",
        el: function deleteUser(id) {
          return <a href={`/user/${id}`}>{id}</a>;
        },
      },
    ],
    data: [],
  };

  // TableState. its contain table constructor like header, and filled by use effect
  const [tablestate, setTableState] = useState(tableConstructor);

  // Use effect to get initial data Table
  useEffect(() => {
    async function getTableData() {
      // call middleware callerAxios
      const t_data = await callerAxiosGet(
        `${process.env.REACT_APP_BACKEND_SERVER}/dashboard/alluser?sortBy=${tableProperty.sortBy}&sortMethod=${tableProperty.sortMethod}&searchBy=${tableProperty.searchBy}&searchValue=${tableProperty.searchValue}&page=${tableProperty.page}&maxPerpage=${tableProperty.maxPerpage}`,
        {
          "x-access-token": localStorage.getItem("x-access-token"),
        }
      );

      setTableState({ ...tablestate, data: t_data.data });
    }
    getTableData();
    // useEffect get called again every change happen in this dependency list (tableProperty changed)
  }, [tableProperty]);

  return (
    <div>
      <div className="mb-2">
        {/* Going back history one step back */}
        <Button size={"xs"} color="gray" onClick={() => navigate(-1)}>
          <HiBackspace className="mr-3 h-4 w-4" />
          Back
        </Button>
      </div>
      <h1 className="text-xl font-bold mb-2">Table Examples</h1>
      <Card>
        {/* call table server side table component */}
        <ServerSideTable
          tdata={tablestate}
          parentTableProperty={tableProperty}
          parentSetTableProperty={setTableProperty}
        ></ServerSideTable>
      </Card>
    </div>
  );
}

export default TableExample;
