import {useEffect, useState} from "react";
import axios from "axios";
import {API_URLS} from "config/api/apiUrls.config";

/**
 * @description
 * useFetchBeers is a custom hook that fetches beers from the API.
 * It refreshes the data when the page changes.
 *
 * @returns [isLoading, data, error]
 * isLoading: boolean,
 * data: any,
 * error: any,
 * endOfData: boolean
 *
 * @param page
 */

const useFetchBeers = (page: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [endOfData, setEndOfData] = useState(false);

  useEffect(() => {
    if (endOfData) return;
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
        if (response.data.length < 25) {
          setEndOfData(true);
        }
        if (response.data.length === 0) {
          return;
        }
        setData(response.data);
      } catch (e) {
        setError(e);
      }
    })();
  }, [page]);
  return [isLoading, data, error, endOfData];
};
export default useFetchBeers;
