import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/slice/user";

const UserAdd = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDesc, setCompanyDesc] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name,
      email,
      phone,
      website,
      username,
      address: {
        city,
        street: address,
        zipcode,
        suite: "",
        geo: "2179219",
      },
      company: {
        bs: companyDesc,
        catchPhrase: "",
        name: companyName,
      },
    };
    dispatch(addUser(newUser));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-1 rounded-full">
          <Plus className="w-5 h-5 dark:text-slate-100" />
          <p className="font-semibold dark:text-slate-100">Add User</p>
        </Button>
      </DialogTrigger>
      <DialogContent
        onKeyDown={(e) => e.stopPropagation()}
        className="sm:max-w-[600px]"
      >
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <div className="flex gap-3">
          <Input
            id="name"
            placeholder="Enter name..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            id="username"
            placeholder="Enter username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <Input
          id="phone"
          placeholder="Enter phone..."
          type="number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Input
          id="email"
          placeholder="Enter email..."
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="website"
          placeholder="Enter website..."
          type="url"
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        />
        <div className="flex gap-3">
          <Input
            id="address"
            placeholder="Enter address..."
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Input
            id="city"
            placeholder="Enter City..."
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <Input
            id="zipcode"
            placeholder="Enter Zip Code..."
            type="number"
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-3">
          <Input
            id="company"
            placeholder="Enter Company Name..."
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
          <Input
            id="description"
            placeholder="Enter Company Description..."
            onChange={(e) => {
              setCompanyDesc(e.target.value);
            }}
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddUser}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserAdd;
