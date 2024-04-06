"use client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
import LatestFood from "@/components/home/latestFood";
import BannerMarquee from "@/components/home/marquee";
import BannerSwiper from "@/components/home/banner";

function Hero() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BannerMarquee />
        <BannerSwiper />
        <LatestFood />
      </QueryClientProvider>
    </>
  );
}
export default Hero;
