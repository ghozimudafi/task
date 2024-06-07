import { useContext } from "react";
import Link from "next/link";
import DataContext from "../context/DataContext";
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

const Config = () => {
  const { savedData } = useContext(DataContext);

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
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Name Bank
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Account
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Remark Pattern
              </th>
            </tr>
          </thead>
          <tbody>
            {savedData.map((data: any, index: any) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {data.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {data.account}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {data.remark}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <DataTableDemo /> */}
      </div>
    </div>
  );
};

export default Config;
