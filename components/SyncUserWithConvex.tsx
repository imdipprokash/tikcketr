"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";

import React, { useEffect } from "react";

const SyncUserWithConvex = () => {
  2;
  const { user } = useUser();
  const updateUser = useMutation(api.users.updateUser);

  useEffect(() => {
    if (!user) return;
    const syncUser = async () => {
      try {
        await updateUser({
          userId: user.id,
          name: user.fullName ?? "",
          email: user.emailAddresses[0]?.emailAddress ?? "",
        });
      } catch (error) {
        console.log(error);
      }
    };
    syncUser();
  }, [user, updateUser]);
  return null;
};

export default SyncUserWithConvex;
