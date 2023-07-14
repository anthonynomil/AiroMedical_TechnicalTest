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
    removeDuplicates,
  } = useBeersStore((state) => state);
  const [viewBeers, setViewBeers] = useState<TBeer[]>([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await axios.get(API_URLS.beers, {
        params: {
          page,
        },
      });
      addBeers(response.data);
      removeDuplicates();
    })();
  }, [page]);

  useEffect(() => {
    if (beers.length === 0) return;
    console.log("Offset");
    console.log(beers.slice(offset + 15, offset + 30));
    if (beers.slice(offset + 15, offset + 30).length >= 15) {
      setViewBeers(beers.slice(offset, offset + 15));
    } else {
      setPage((prev) => prev + 1);
    }
  }, [offset]);

  useEffect(() => {
    setViewBeers(beers.slice(offset, offset + 15));
  }, [beers]);

  useEffect(() => {
    console.log("View Beers");
    console.log(viewBeers);
  }, [viewBeers]);

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
      <button onClick={() => setOffset(offset + 15)}>Next</button>
    </div>
  );
};
export default RemakeHome;
