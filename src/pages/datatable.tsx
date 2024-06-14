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
      // dom: "Bfrtip",
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
    </Card>
  );
};

export default DataTable;
