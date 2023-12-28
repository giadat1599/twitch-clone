"use client";

import { useTransition } from "react";

import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { onBlock, onUnblockUser } from "@/actions/block";

interface ActionsProps {
   isFollowing: boolean;
   userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
   const [isPending, startTransition] = useTransition();

   const handleFollow = () => {
      startTransition(() => {
         onFollow(userId)
            .then((data) => toast.success(`You are now following ${data.following.username}`))
            .catch(() => toast.error("Something went wrong"));
      });
   };

   const handleunFollow = () => {
      startTransition(() => {
         onUnfollow(userId)
            .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
            .catch(() => toast.error("Something went wrong"));
      });
   };

   const handleBlock = () => {
      startTransition(() => {
         onBlock(userId)
            .then((data) => toast.success(`Blocked the user ${data.blocked.username}`))
            .catch(() => toast.error("Something went wrong"));
      });
   };

   const handleUnblock = () => {
      startTransition(() => {
         onUnblockUser(userId)
            .then((data) => toast.success(`Unblocked the user ${data.blocked.username}`))
            .catch(() => toast.error("Something went wrong"));
      });
   };

   const onClick = () => {
      if (isFollowing) {
         handleunFollow();
      } else {
         handleFollow();
      }
   };
   return (
      <>
         <Button disabled={isPending} variant="primary" onClick={onClick}>
            {isFollowing ? "Unfollow" : "Follow"}
         </Button>
         <Button disabled={isPending} onClick={handleUnblock}>
            Unblock
         </Button>
      </>
   );
};
