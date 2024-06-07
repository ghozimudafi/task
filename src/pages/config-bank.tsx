import { useContext } from "react";
import Link from "next/link";
import DataContext from "../context/DataContext";
import React, { useEffect, useRef } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Config = () => {
  const { savedData } = useContext(DataContext);
  // const data = [
  //   { name: "John Doe", account: 28, remark: "Software Engineer" },
  //   { name: "Jane Smith", account: 34, remark: "Project Manager" },
  //   { name: "Michael Brown", account: 45, remark: "CEO" },
  // ];

  const columns = [
    { title: "#", data: "no" },
    { title: "NAME BANK", data: "name" },
    { title: "ACCOUNT", data: "account" },
    { title: "REMARK PATTERN", data: "remark" },
    { title: "ACTIVE", data: "status" },
    {
      title: "ACTION",
      data: "action",
      render: (savedData: any, type: any, row: { name: any }) => {
        return `<button onClick="alert('Edit ${row.name}')">Edit</button>`;
      },
    },
  ];

  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const table = $("#tableBank").DataTable({
      savedData,
      paging: true,
      pagingType: "full_numbers",
      searching: true,
      ordering: true,
      pageLength: 10,
      lengthChange: true,
      dom: "lBrtip",
      language: {
        search: "Cari:",
        lengthMenu: "Tampilkan _MENU_ baris",
        info: "Menampilkan _START_ ke _END_ dari _TOTAL_ baris",
      },
      columnDefs: [
        {
          targets: -1,
          data: null,
          defaultContent: "<button >Action</button>",
        },
      ],
    });

    return () => {
      table.destroy();
    };
  }, [savedData, columns]);

  return (
    <div className="h-[698px] w-auto border-solid border-2 border-black m-3 p-5 rounded-[5px] ">
      <div>
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Configuration</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/config-bank">Bank Transfer</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Card className="mt-[20px] border-solid border-[2px] border-black flex justify-between">
        <CardHeader>
          <CardTitle>
            <FontAwesomeIcon icon={faTags} className="mr-[10px]" />
            Bank Transfer Configuration
          </CardTitle>
        </CardHeader>
        <Button
          variant={"outline"}
          className="bg-gray-300 justify-end m-[15px]"
          asChild
        >
          <Link href="/bank-transfer"> Add Config</Link>
        </Button>
      </Card>
      <div className="h-[400px] w-auto border-solid border-2 border-black rounded-[5px] p-[20px] mt-5">
        <div className="relative mt-1 justify-end flex">
          <Label className="mt-[12px] mr-[25px]">Search :</Label>
          <Input className="w-[300px]" />
        </div>
        <table
          id="tableBank"
          ref={tableRef}
          className="w-full text-sm text-left rtl:text-right"
          width="100%"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                #
              </th>
              <th scope="col" className="p-4">
                NAME BANK
              </th>
              <th scope="col" className="p-4">
                ACCOUNT
              </th>
              <th scope="col" className="p-4">
                REMARK PATTERN
              </th>
              <th scope="col" className="p-4">
                ACTIVE
              </th>
              <th scope="col" className="p-4">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {savedData.map((data: any, index: any) => (
              <tr key={index} className="bg-white border-b  hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {index + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {data.name}
                </th>
                <td className="w-4 p-4">{data.account}</td>
                <td className="w-4 p-4">{data.remark}</td>
                <td className="w-4 p-4">{data.status}</td>
                <td className="w-4 p-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        ></nav>
        {/* <DataTableDemo /> */}
        {/* <DataTable data={savedData} columns={columns} /> */}
      </div>
    </div>
  );
};

export default Config;
