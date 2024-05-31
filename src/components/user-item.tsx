import { User } from "@/lib/types";
import React from "react";
import UserDelete from "./users/user-delete";
import UserEdit from "./users/user-edit";
import UserDetail from "./users/user-detail";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  const id = user.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex flex-wrap items-center px-2 py-1 my-1 space-x-1"
    >
      <Avatar>
        <AvatarImage src={`https://picsum.photos/200/300?random=${id}`} />
      </Avatar>
      <p
        className={`pl-2 font-medium mr-auto grow text-slate-600 dark:text-slate-300`}
      >
        {user.name}
      </p>
      <UserDetail user={user} />
      <UserEdit user={user} />
      <UserDelete id={user.id} />
    </div>
  );
};

export default UserItem;
