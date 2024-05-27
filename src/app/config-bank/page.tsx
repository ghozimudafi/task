"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";
import { useEffect, useState } from "react";
import $ from "jquery";
import { DataTableDemo } from "../table-data/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";

const Config = () => {
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
      {/* <div className="h-[70px] w-auto border-solid border-2 border-black rounded-[5px] p-[20px] mt-5 flex justify-between">
        <span>
          <FontAwesomeIcon icon={faTags} />
          Bank Transfer Configuration
        </span>
        <Button variant={"outline"} className="bg-gray-300 justify-end" asChild>
          <Link href="/bank-transfer"> Add Config</Link>
        </Button>
      </div> */}
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
        {/* <div className="h-[320px] w-auto border-solid border-2 border-black">
          <Table className="table" id="myTable">
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead className="w-[200px]">BANK NAME</TableHead>
                <TableHead className="w-[200px]">BANK ACCOUNT</TableHead>
                <TableHead className="w-[200px]">REMARK PATTERN</TableHead>
                <TableHead className="text-right">ACTIVE</TableHead>
                <TableHead className="text-right">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>BTN001</TableCell>
                <TableCell>jijiji</TableCell>
                <TableCell>osapsja</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div> */}
        {/* <DataTableDemo /> */}
        {/* <div className="flex">
          <span></span>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div> */}
      </div>
    </div>
  );
};

export default Config;
