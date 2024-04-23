import { useEffect, useState } from "react";
export const BASE_URL = "http://localhost:5000";
// export const BASE_URL = "https://bismillah-chiness-dashboard-server.vercel.app";
const useAxios = (endpoint, query) => {
  const [resData, setResData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL + endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch data (status ${response.status})`);
        }
        const data = await response.json();
        if (query) {
          setResData(query);
        } else {
          setResData(data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [endpoint, query]);

  return [resData, isLoading, setResData];
};
export default useAxios;
