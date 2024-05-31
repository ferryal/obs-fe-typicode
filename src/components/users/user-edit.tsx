import React, { useState } from "react";
import { Pencil } from "lucide-react";
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
import { User } from "@/lib/types";
import { useDispatch } from "react-redux";
import { editUser } from "@/store/slice/user";

interface Props {
  user: User;
}

const UserEdit = ({ user }: Props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [website, setWebsite] = useState(user.website);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user?.phone);
  const [username, setUsername] = useState(user?.username);
  const [address, setAddress] = useState(user?.address?.street);
  const [city, setCity] = useState(user?.address?.city);
  const [zipcode, setZipCode] = useState(user?.address?.zipcode);
  const [companyName, setCompanyName] = useState(user?.company?.name);
  const [companyDesc, setCompanyDesc] = useState(user?.company?.bs);
  const [open, setOpen] = useState(false);

  const handleEditUser = () => {
    const newUser = {
      ...user,
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

    dispatch(editUser(newUser));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className="w-8 h-8">
          <Pencil className="w-5 h-5 text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent
        onKeyDown={(e) => e.stopPropagation()}
        className="sm:max-w-[600px]"
      >
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        {/* <Input
          id="todo"
          defaultValue={user.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          id="todo"
          defaultValue={user.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="todo"
          defaultValue={user.website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        /> */}


        <div className="flex gap-3">
          <Input
            id="name"
            defaultValue={name}
            placeholder="Enter name..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            id="username"
            defaultValue={username}
            placeholder="Enter username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <Input
          id="phone"
          placeholder="Enter phone..."
          defaultValue={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Input
          id="email"
          placeholder="Enter email..."
          defaultValue={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="website"
          placeholder="Enter website..."
          defaultValue={website}
          type="url"
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        />
        <div className="flex gap-3">
          <Input
            id="address"
            placeholder="Enter address..."
            defaultValue={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Input
            id="city"
            placeholder="Enter City..."
            defaultValue={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <Input
            id="zipcode"
            placeholder="Enter Zip Code..."
            defaultValue={zipcode}
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-3">
          <Input
            id="company"
            placeholder="Enter Company Name..."
            defaultValue={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
          <Input
            id="description"
            placeholder="Enter Company Description..."
            defaultValue={companyDesc}
            onChange={(e) => {
              setCompanyDesc(e.target.value);
            }}
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleEditUser}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserEdit;
