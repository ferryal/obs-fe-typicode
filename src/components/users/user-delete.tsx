import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeUser } from "@/store/slice/user";

interface Props {
  id: number;
}

const UserDelete = ({ id }: Props) => {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(removeUser(id));
  };

  return (
    <Button
      onClick={handleDeleteUser}
      size="icon"
      variant="ghost"
      className="w-8 h-8"
    >
      <Trash2 className="w-5 h-5 text-red-500" />
    </Button>
  );
};

export default UserDelete;
