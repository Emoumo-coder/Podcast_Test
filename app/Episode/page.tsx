"use client"
import PodcastPlayer from "@/components/PodcastPlayer";
import Queue from "@/components/Queue";
import Subscribe from "@/components/Subscribe";
import React from "react";

const page = () => {
  return (
    <div>
      <PodcastPlayer />
      <Queue />
      <Subscribe />
    </div>
  );
};

export default page;
