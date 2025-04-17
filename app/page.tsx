import Ads from "@/components/Ads";
import AdBannerRow from "@/components/Ads2";
import EditorsPicks from "@/components/EditorsPick";
import Educational from "@/components/Educational";
import Entertainment from "@/components/Entertainment";
import Global from "@/components/Global";
import NewlyAddded from "@/components/NewlyAdded";
import OtherPodcasts from "@/components/OtherPodcasts";
import StoryTelling from "@/components/StoryTelling";
import Subscribe from "@/components/Subscribe";
import Tech from "@/components/Tech";
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

      <Educational />
      <Entertainment />
      <Tech />
      <OtherPodcasts />
      <Subscribe />
      <Global />
    </div>
  );
}
