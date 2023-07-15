import useBeersStore from "store/useBeers.store";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import DeleteButton from "components/ui/buttons/DeleteButton";
import { API_URLS } from "config/api/apiUrls.config";
import axios from "axios";
import BeerComponent from "components/beer/BeerComponent";
import { TBeer } from "types/Beer.type";

const RemakeHome = () => {
  const {
    beers,
    totalBeers,
    selectedBeers,
    addBeers,
    setBeers,
    toggleSelectedBeer,
    deleteBeers,
  } = useBeersStore((state) => state);
  const [viewBeers, setViewBeers] = useState<TBeer[]>([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [endOfData, setEndOfData] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(API_URLS.beers, {
          params: {
            page,
          },
        });
        if (response.data.length === 0) {
          setEndOfData(true);
          return;
        }
        if (beers.some((beer) => beer.id === response.data[0].id)) {
          return;
        }
        addBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  useEffect(() => {
    console.log(beers.length);
    if (beers.length !== 0) {
      console.log(beers.length / (offset + 15));
      if (beers.length / (offset + 15) >= 1) {
        setViewBeers(beers.slice(offset, offset + 15));
      } else {
        console.log("New page");
        console.log(beers.length / (15 * page));
        setPage((prev) => prev + 1);
      }
    }
  }, [offset, beers]);

  const handleDelete = () => {
    deleteBeers(selectedBeers);
  };

  const handleContextMenu = (e: any, beer: TBeer) => {
    e.preventDefault();
    toggleSelectedBeer(beer);
  };

  return (
    <div>
      <h1>Remake Home</h1>
      <Stack spacing={2}>
        {viewBeers.length > 0 ? (
          viewBeers.map((beer) => (
            <Box
              key={beer.id}
              onClick={() => toggleSelectedBeer(beer)}
              onContextMenu={(e) => handleContextMenu(e, beer)}
            >
              <BeerComponent
                beer={beer}
                isSelected={selectedBeers.includes(beer)}
              />
            </Box>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Stack>
      {selectedBeers.length > 0 && (
        <DeleteButton
          variant={"contained"}
          color={"error"}
          onClick={handleDelete}
        >
          Delete
        </DeleteButton>
      )}
      {offset > 0 && (
        <button onClick={() => setOffset(offset - 15)}>Previous</button>
      )}
      {!endOfData && (
        <button onClick={() => setOffset(offset + 15)}>Next</button>
      )}
    </div>
  );
};
export default RemakeHome;
