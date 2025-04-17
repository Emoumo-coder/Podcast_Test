import AllEpisodes from "@/components/AllEpisodes";
import AllPodcasts from "@/components/AllPodcasts";
import ExploreCategories from "@/components/Explore";
import PodcastDetails from "@/components/PodcastDetails";
import React from "react";

const page = () => {
  return (
    <div>
      <PodcastDetails />
      <AllEpisodes />
    </div>
  );
};

export default page;
