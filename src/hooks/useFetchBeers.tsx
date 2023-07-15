import { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS } from "config/api/apiUrls.config";

const useFetchBeers = (page: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          url: API_URLS.beers,
          method: "GET",
          params: {
            page,
          },
        });
        setIsLoading(false);
        setData(response.data);
      } catch (e) {
        setError(e);
      }
    })();
  }, [page]);

  useEffect(() => {
    console.log("Re-rendered");
  }, [page]);

  return [isLoading, data, error];
};
export default useFetchBeers;
