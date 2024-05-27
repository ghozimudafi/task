"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faTags } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm, FormProvider } from "react-hook-form";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";

const AddBank = () => {
  const form = useForm();
  // const [name, setName] = useState("");
  // const [account, setAccount] = useState("");
  // const [remark, setRemark] = useState("");
  // const [status, setStatus] = useState("");

  // function inputValue() {
  //   var name = document.getElementById("name");
  //   document.getElementById("result")?.innerText = "name " + name;
  // }

  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data: any) => setResult(JSON.stringify(data));

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const savedName = localStorage.getItem("name");
  //     if (savedName) {
  //       setName(savedName);
  //     }
  //   }
  // }),
  //   [];

  const handleInputChange = (e: any) => {
    register(e.target.value);
  };

  // const handleSubmit = (e: any, data: any) => {
  //   console.log(e);

  //   e.preventDefault();
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("name", name);
  //   }
  //   alert("Name" + +"saved to local storage");
  //   setName("");
  //   setAccount("");
  //   setRemark("");
  //   setStatus("");
  // };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="h-[698px] w-auto border-solid border-2 border-black m-3 p-5 rounded-[5px">
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
          <FormProvider {...form}>
            <form
              action={"/config-bank"}
              className="space-y-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="bankname"
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel className="w-[200px] mt-[20px]">
                      Bank Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Bank Name"
                        id="name"
                        {...register("name")}
                        // onChange={handleInputChange}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel className="w-[200px] mt-[20px]">
                      Bank Account
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Bank Account"
                        id="email"
                        {...register("email")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel className="w-[200px] mt-[20px]">
                      Remark Pattern
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Remark Pattern"
                        id="id"
                        {...register("id")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="active"
                render={({ field }) => (
                  <FormItem className="ml-[130px] flex">
                    <FormControl className="mt-[7px]">
                      <Checkbox id="status" value={status} />
                    </FormControl>
                    <FormLabel className="ml-[10px]">Active</FormLabel>
                  </FormItem>
                )}
              />
              {/* <button type="submit">save</button> */}
            </form>
          </FormProvider>
        </div>
        <p>{result}</p>
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
        >
          save
        </Button>
      </div>
    </div>
  );
};

export default AddBank;
