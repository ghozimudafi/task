import { useState, useContext } from "react";
import { useRouter } from "next/router";
import DataContext from "../context/DataContext";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faEllipsisVertical,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Item {
  name: string;
  account: string;
  remark: string;
}

export default function InputPage() {
  const [inputData, setInputData] = useState("");
  const { addData } = useContext(DataContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Item>();

  const onSubmit: SubmitHandler<Item> = (data) => {
    addData(data); // Add the input data to the context
    router.push("/"); // Navigate to the main page
  };

  // const handleInputChange = (e: any) => {
  //   setInputData(e.target.value);
  // };

  // const handleSaveData = () => {
  //   addData(inputData);
  //   setInputData(""); // Reset input field
  //   router.push("/"); // Navigate to the main page
  // };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[500px] flex mt-[10px] ml-[100px] ">
              <Label className="w-[200px] mt-[12px]">Bank Name</Label>
              <Input {...register("name", { required: true })} placeholder="" />
              {errors.name && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
            <div className="w-[500px] flex mt-[10px] ml-[100px] ">
              <Label className="w-[200px] mt-[12px]">Account</Label>
              <Input
                {...register("account", { required: true })}
                placeholder=""
              />
              {errors.account && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
            <div className="w-[500px] flex mt-[10px] ml-[100px] ">
              <Label className="w-[200px] mt-[12px]">Remark Pattern</Label>
              <Input
                {...register("remark", { required: true })}
                placeholder=""
              />
              {errors.remark && (
                <span style={{ color: "red" }}>This field is required</span>
              )}
            </div>
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
          onClick={handleSubmit(onSubmit)}
        >
          save
        </Button>
      </div>

      {/* Tanpa React Hook Form */}
      {/* <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder="Enter some data"
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleSaveData} style={{ padding: "10px" }}>
        Save Data
      </button> */}

      {/* Use React Hook Form */}
    </div>
  );
}
