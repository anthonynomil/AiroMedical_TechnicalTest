import { useEffect, useState } from "react";
import { TBeer } from "types/Beer.type";
import { API_URLS } from "config/api/apiUrls.config";

const useFetchBeer = (id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [beer, setBeer] = useState<TBeer | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_URLS.beers}/${id}`);
        const data = await response.json();
        setBeer(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return [isLoading, beer, error];
};

export default useFetchBeer;
