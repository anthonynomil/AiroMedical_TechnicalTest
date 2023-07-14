import { TBeer } from "types/Beer.type";

export const showBeers = (beers: TBeer[], offset: number) => {
  const beersSliced = beers.slice(offset, offset + 5);
  return beersSliced;
};
