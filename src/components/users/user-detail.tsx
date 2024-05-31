import React, { useState } from "react";
import {
  Eye,
  Phone,
  MailIcon,
  User2,
  Link2,
  Info,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@/lib/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Props {
  user: User;
}

const UserDetail = ({ user }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" className="w-8 h-8">
          <Eye className="w-7 h-7 text-green-500" />
        </Button>
      </DialogTrigger>
      <DialogContent
        onKeyDown={(e) => e.stopPropagation()}
        className="sm:max-w-[600px]"
      >
        <DialogHeader>
          <DialogTitle>Detail User</DialogTitle>
        </DialogHeader>
        <Avatar>
          <AvatarImage
            src={`${process.env.NEXT_PUBLIC_BASE_AVATAR_URL}/200/300?random=${user?.id}`}
          />
        </Avatar>
        <div className="flex gap-2 items-center">
          <User2 className="w-4 h-4" />
          <p>{`${user?.name} (${user.username})`}</p>
        </div>
        <div className="flex gap-2 items-center">
          <MailIcon className="w-4 h-4" />
          <p>{user?.email}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Phone className="w-4 h-4" />
          <p>{user?.phone}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Link2 className="w-4 h-4" />
          <p>{user?.website}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Info className="w-4 h-4" />
          <p>{`${user?.address?.street}, ${user?.address?.suite}, ${user?.address?.city} (${user?.address?.zipcode})`}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Building className="w-4 h-4" />
          <p>{`${user?.company?.name} (${user?.company?.bs})`}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetail;
