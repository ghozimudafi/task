/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useState, useEffect } from "react";

let nextId = 1;

interface Item {
  id: number;
  name: string;
  account: string;
  remark: string;
  status: string;
  selected: boolean;
}

const data: Payment[] = [
  {
    no: nextId++,
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
  },
  {
    no: nextId++,
    id: "3u1reuv4",
    amount: 242,
    name: "success",
    email: "Abe45@gmail.com",
  },
  {
    no: nextId++,
    id: "derv1ws0",
    amount: 837,
    name: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    no: nextId++,
    id: "5kma53ae",
    amount: 874,
    name: "success",
    email: "Silas22@gmail.com",
  },
  {
    no: nextId++,
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
  {
    no: nextId++,
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
  {
    no: nextId++,
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
  {
    no: nextId++,
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
  {
    no: nextId++,
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
  {
    no: nextId++,
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
];

export type Payment = {
  no: number;
  id: string;
  amount: number;
  name: string;
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "no",
    header: "#",
    cell: ({ row }) => <div className="capitalize">{row.getValue("no")}</div>,
  },
  {
    accessorKey: "name",
    header: "Bank Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Bank Account
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-left">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Remark Pattern</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-left">Action</div>,

    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button className="h-8 w-8 p-0">Show</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button className="h-8 w-8 p-0">Delete</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo() {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("selectedItems");
    const items: Item[] = storedItems ? JSON.parse(storedItems) : [];
    setSelectedItems(items);
  }, []);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full h-[300px]">
      <div className="flex items-center py-3 justify-end">
        <label htmlFor="" className="mr-[10px]">
          Search :
        </label>
        <Input
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <ScrollArea className="h-[300px] w-auto rounded-md border">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {/* {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))} */}
                    {selectedItems.map((item) => (
                      <TableCell key={item.id}>
                        {item.name},{item.account},{item.remark},
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </ScrollArea>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
