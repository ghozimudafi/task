"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faTags } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";

export default function AddBank() {
  // const router = useRouter();

  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [remark, setRemark] = useState<string>("");
  const [status, setStatus] = useState<Item[]>([
    { id: 1, status: "Active", selected: false, name, account, remark },
  ]);

  interface Item {
    id: number;
    name: string;
    account: string;
    remark: string;
    status: string;
    selected: boolean;
  }

  const handleCheckboxChange = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setItems(updatedItems);
  };

  const addItem = () => {
    const newItem: Item = {
      id: items.length + 1,
      name,
      account,
      remark,
      status: "",
      selected: false,
    };
    const selectedItems = items.filter((item) => item.selected);
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    setItems([...items, newItem]);
    setName("");
    setAccount("");
    setRemark("");
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="h-[698px] w-auto border-solid border-2 border-black m-3 p-5 rounded-[5px]">
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
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/bank-tranfer">Add</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Card className="mt-[20px] border-solid border-[2px] border-black">
        <CardHeader>
          <CardTitle>
            <FontAwesomeIcon icon={faTags} className="mr-[10px]" />
            Bank Transfer Configuration
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="p-[20px] mt-[20px] border-solid border-[2px] border-black">
        <CardDescription className="ml-10px">
          <FontAwesomeIcon icon={faEllipsisVertical} /> Bank Transfer
          Configuration
        </CardDescription>

        <div className=" w-[100%] justify-center border-[2px] mt-[10px] border-solid border-black flex"></div>
        <div className="h-auto w-[100%] justify-center flex mt-[25px]">
          <form>
            <div className="w-[500px] flex  mt-[10px]">
              <Label className="w-[200px] mt-[12px]">Bank Name </Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter item name"
              />
            </div>
            <div className="w-[500px] flex  mt-[10px]">
              <Label className="w-[200px] mt-[12px]">Account </Label>
              <Input
                type="text"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="Enter item account"
              />
            </div>
            <div className="w-[500px] flex  mt-[10px]">
              <Label className="w-[200px] mt-[12px]">Remark Pattern </Label>
              <Input
                type="text"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                placeholder="Enter item remark"
              />
            </div>
            {/* {items.map((item) => (
              <div className="w-[500px] flex  mt-[10px]" key={item.id}>
                <Checkbox
                  value={status}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <Label className="ml-[15px]">Active </Label>
              </div>
            ))} */}
          </form>
        </div>
      </Card>
      <div className="flex justify-end m-[15px]">
        <Button
          className="btn bg-gray-300 mr-[20px]"
          type="button"
          variant="secondary"
          id="kembali"
          onClick={handleBack}
        >
          <FontAwesomeIcon icon={faArrowsRotate} className="mr-[5px]" />
          Cancel
        </Button>
        <Button
          className="btn bg-gray-300"
          type="submit"
          variant="secondary"
          id="input"
          onClick={addItem}
        >
          save
        </Button>
      </div>
      <ul>
        {items.map((items) => (
          <>
            <li key={items.id}>{items.name}</li>
            <li>{items.account}</li>
            <li>{items.remark}</li>
            <li>{items.status}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
