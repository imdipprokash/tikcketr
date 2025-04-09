"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useRouter } from "next/router";
import React from "react";

const EventCard = ({ eventId }: { eventId: Id<"events"> }) => {
  const { user } = useUser();
  const event = useQuery(api.events.getById, { eventId });
  return <div>EventCard</div>;
};

export default EventCard;
