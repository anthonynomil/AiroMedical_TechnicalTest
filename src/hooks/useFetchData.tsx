import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url: string, options: any = { method: "GET" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          url: url,
          ...options,
        });
        setData(response.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
    console.log("Fetching data");
  }, [url, options]);

  useEffect(() => {
    console.log("Re-rendered");
  }, [url, options]);

  return { isLoading, data, error };
};

export default useFetchData;
