import { Table } from "flowbite-react";
import { Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";

export default function ServerSideTable({
  tdata,
  parentTableProperty,
  parentSetTableProperty,
}) {
  function onNext() {
    let cpParentProps = { ...parentTableProperty };
    cpParentProps.page =
      cpParentProps.page + parseInt(cpParentProps.maxPerpage);
    cpParentProps.paginationPage += 1;
    parentSetTableProperty(cpParentProps);
  }

  function onPrev() {
    let cpParentProps = { ...parentTableProperty };

    cpParentProps.page =
      cpParentProps.page - parseInt(cpParentProps.maxPerpage);
    if (cpParentProps.page < 0) {
      cpParentProps.page = 0;
      return parentSetTableProperty(cpParentProps);
    }
    cpParentProps.paginationPage -= 1;
    parentSetTableProperty(cpParentProps);
  }

  function onChangeHandler(e) {
    parentSetTableProperty({
      ...parentTableProperty,
      [e.target.id]: e.target.value,
      page: 0,
    });
  }

  //   Render Row
  function renderCellColumn(row, header) {
    //    if headers is element render element instead data
    if (header.type === "element")
      return (
        <Table.Cell key={Math.random()}>
          {header.el(row[parentTableProperty.idProperty])}
        </Table.Cell>
      );
    // render tdata.data
    return (
      <Table.Cell key={Math.random()}>{row[`${header.title}`]}</Table.Cell>
    );
  }

  //   Render
  return (
    <div>
      {/* Table Main Data */}
      <div className="flex">
        <div className="basis-1/6 m-1">
          <Label value="Search By"></Label>
        </div>
        <div className="basis-1/6 m-1">
          <Select
            sizing="sm"
            id="searchBy"
            required={true}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          >
            {parentTableProperty.searchOptionItems.map((item) =>
              parentTableProperty.searchBy === item ? (
                <option key={item} value={item} defaultValue>
                  {item}
                </option>
              ) : (
                <option key={item} value={item}>
                  {item}
                </option>
              )
            )}
          </Select>
        </div>
        <div className="basis-20 m-1">
          <Label value="Search text"></Label>
        </div>
        <div className="basis-1/2 m-1">
          <TextInput
            sizing="sm"
            id="searchValue"
            onChange={(e) => onChangeHandler(e)}
          ></TextInput>
        </div>
      </div>

      <div className="flex mb-2">
        <div className="basis-1/6 m-1">
          <Label value="Sort By"></Label>
        </div>
        <div className="basis-1/6 m-1">
          <Select
            sizing="sm"
            id="sortBy"
            required={true}
            onChange={(e) => {
              onChangeHandler(e);
            }}
          >
            {parentTableProperty.sortOptionItems.map((item) =>
              parentTableProperty.sortBy === item ? (
                <option key={item} value={item} defaultValue>
                  {item}
                </option>
              ) : (
                <option key={item} value={item}>
                  {item}
                </option>
              )
            )}
          </Select>
        </div>

        <div className="basis-20 m-1">
          <Select
            id="sortMethod"
            sizing={"sm"}
            onChange={(e) => onChangeHandler(e)}
          >
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </Select>
        </div>
      </div>

      <div className="flex"></div>
      <Table hoverable={true}>
        <Table.Head>
          {tdata.headers.map((header) => (
            <Table.HeadCell key={header.title}>{header.title}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {/* Map tdata.data */}
          {tdata.data.map((row) => {
            // Render table row, with passing row(from data) and header from headers
            return (
              <Table.Row
                key={row.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                {tdata.headers.map((header) => renderCellColumn(row, header))}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {/* Table Pagination */}
      <div className="flex flex-col items-center">
        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="perPage" value="Data per page" />
            <Select
              id="maxPerpage"
              sizing="sm"
              required={true}
              onChange={(e) => {
                onChangeHandler(e);
              }}
            >
              {[10, 20, 30, 50, 100].map((i) => {
                if (i === parentTableProperty.maxPerpage) {
                  return (
                    <option
                      key={i}
                      value={parentTableProperty.maxPerpage}
                      defaultValue
                    >
                      {parentTableProperty.maxPerpage}
                    </option>
                  );
                }
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })}
            </Select>
          </div>
        </div>
        {/* Help text */}
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing page{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {parentTableProperty.paginationPage}
          </span>{" "}
          and display{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {parentTableProperty.maxPerpage}
          </span>{" "}
          entries
        </span>
        {/* Buttons */}
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={onPrev}
          >
            Prev
          </button>
          <button
            className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
