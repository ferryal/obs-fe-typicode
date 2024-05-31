"use client";

import UserList from "@/components/user-list";
import { User } from "@/lib/types";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsers as setActionUsers } from "@/store/slice/user";

export default function Home() {
  const dispatch = useDispatch();
  const usersStore = useSelector((state: any) => state.users.users);
  const [name, setName] = useState("");

  const [filteredUsers, setFilteredUsers] = useState<User[]>(usersStore);


  useEffect(() => {
    setFilteredUsers(usersStore);
  }, [usersStore]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users`
        );
        dispatch(setActionUsers(response.data));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const reorderUsers = (
    users: User[],
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
  ) => {
    const originalPos = users.findIndex((item) => item.id === activeId);
    const newPos = users.findIndex((item) => item.id === overId);

    if (originalPos === -1 || newPos === -1) {
      alert("Invalid user IDs provided.");
      return users;
    }

    const reorderedUsers = [...users];
    const [movedUser] = reorderedUsers.splice(originalPos, 1);
    reorderedUsers.splice(newPos, 0, movedUser);

    return reorderedUsers;
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    const updatedUsers = reorderUsers(usersStore, active.id, over.id);
    dispatch(setActionUsers(updatedUsers));
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 4,
    },
  });

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const onSearch = () => { 
    const filtered = usersStore.filter((user: User) => {
      const matchesName =
        name === "" || user.name.toLowerCase().includes(name.toLowerCase());

      return matchesName;
    });

    setFilteredUsers(filtered);
  };

  const onReset = () => {
    setName("");
    setFilteredUsers(usersStore);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="w-full shadow-sm max-w-[600px] py-3 mb-4 font-semibold tracking-wider text-center bg-primary text-secondary dark:text-slate-100 rounded-lg">
        User List
      </h1>
      <div className="flex flex-row justify-start mb-3 gap-2 flex-wrap items-center">
        <Input
          id="search"
          value={name}
          placeholder="Search name..."
          className="max-w-[150px]"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button
          className="flex items-center gap-1 rounded-full justify-end"
          onClick={onSearch}
        >
          <p className="font-semibold dark:text-slate-100">Search</p>
          <Search className="w-5 h-5 dark:text-slate-100" />
        </Button>
        <Button
          className="flex items-center gap-1 rounded-full justify-end bg-red-500 hover:bg-red-300"
          onClick={onReset}
        >
          <p className="font-semibold dark:text-slate-100">Reset</p>
        </Button>
      </div>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <UserList users={filteredUsers} />
      </DndContext>
    </main>
  );
}
