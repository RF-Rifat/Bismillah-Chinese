import { useQuery } from "@tanstack/react-query";

const useGetUserData = (endpoint) => {
  const {
    isPending,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch(
        "https://bismillah-chiness-dashboard-server.vercel.app" + endpoint
      ).then((res) => res.json()),
  });
  return [data, refetch, isPending];
};

export default useGetUserData;
