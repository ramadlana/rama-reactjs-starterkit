import { Table } from "flowbite-react";

export default function ServerSideTable({ tdata }) {
  // tdata_example
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

  if (!tdata)
    return (
      <div class="alert alert-success" role="alert">
        <h4 class="alert-title">No Data</h4>
        <div class="text-muted">
          No table data displayed. because page cannot get data from parent
          component
        </div>
      </div>
    );

  //   Render Row
  function renderRow(row, header) {
    //    if headers is element render element instead data
    if (header.type === "element")
      return <Table.Cell>{header.el(row.id)}</Table.Cell>;
    // render tdata.data
    return <Table.Cell>{row[`${header.title}`]}</Table.Cell>;
  }

  //   Render
  return (
    <div className="">
      <Table hoverable={true}>
        <Table.Head>
          {tdata.headers.map((header) => (
            <Table.HeadCell>{header.title}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {/* Map tdata.data */}
          {tdata.data.map((row) => {
            // Render table row, with passing row(from data) and header from headers
            return (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                {tdata.headers.map((header) => renderRow(row, header))}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
