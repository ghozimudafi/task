import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import "datatables.net-searchbuilder-dt";
import "datatables.net-searchpanes-dt";
import "datatables.net-autofill-dt";
import "datatables.net-colreorder-dt";
import { Card } from "@/components/ui/card";

interface DataTableProps {
  data: any[];
  columns: { title: string; data: string }[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const table = $(tableRef.current!).DataTable({
      data,
      columns,
      paging: true,
      pagingType: "full_numbers",
      searching: true,
      ordering: true,
      pageLength: 10,
      lengthChange: true,
      dom: "Bfrtip",
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
  }, [data, columns]);

  return (
    <Card>
      <table
        ref={tableRef}
        className="w-full text-sm text-left rtl:text-right"
        width="100%"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              No
            </th>
            <th scope="col" className="p-4">
              Name Bank
            </th>
            <th scope="col" className="p-4">
              Account
            </th>
            <th scope="col" className="p-4">
              Remark
            </th>
          </tr>
        </thead>
      </table>
      {/* <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </Card>
  );
};

export default DataTable;