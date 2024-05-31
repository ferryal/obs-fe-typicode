import { User } from "@/lib/types";
import React from "react";
import UserItem from "./user-item";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Card } from "./ui/card";
import UserAdd from "./users/user-add";

interface Props {
  users: User[];
}

const UserList = ({ users }: Props) => {
  return (
    <Card className="rounded-lg relative p-2 sm:p-5 max-w-[600px] h-[70dvh] w-full dark:bg-slate-700 bg-slate-50">
      {users.length > 0 ? (
        <>
          <div className="overflow-y-auto overflow-x-hidden h-[60dvh] scrollbar-thumb-slate-700 scrollbar-track-slate-300 scrollbar-thin">
            <SortableContext
              items={users}
              strategy={verticalListSortingStrategy}
            >
              {users.map((user) => (
                <UserItem user={user} key={user.id} />
              ))}
            </SortableContext>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-lg font-semibold">
          No Users 😕
        </div>
      )}
      <div className="absolute -translate-x-1/2 -bottom-5 left-1/2">
        <UserAdd />
      </div>
    </Card>
  );
};

export default UserList;
