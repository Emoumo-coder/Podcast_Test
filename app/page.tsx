import Ads from "@/components/Ads";
import AdBannerRow from "@/components/Ads2";
import EditorsPicks from "@/components/EditorsPick";
import Global from "@/components/Global";
import NewlyAddded from "@/components/NewlyAdded";
import StoryTelling from "@/components/StoryTelling";
import Subscribe from "@/components/Subscribe";
import TrendingPodcasts from "@/components/Trending";

export default function Home() {
  return (
    <div>
      <Ads />
      <EditorsPicks />
      <TrendingPodcasts />
      <NewlyAddded />
      <StoryTelling />
      <AdBannerRow />
      <Subscribe />
      <Global />
    </div>
  );
}
