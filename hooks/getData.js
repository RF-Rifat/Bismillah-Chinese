"use client";
import { useQuery } from "@tanstack/react-query";

const useGetData = (endpoint) => {
  const {
    isPending,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["data", endpoint],
    queryFn: () =>
      fetch(
        "https://bismillah-chiness-dashboard-server.vercel.app" + endpoint
      ).then((res) => res.json()),
  });
  return [data, refetch, isPending];
};

export default useGetData;
