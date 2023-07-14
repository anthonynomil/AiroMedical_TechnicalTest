import { TBeer } from "types/Beer.type";
import { create } from "zustand";

export interface IBeersState {
  beers: TBeer[];
  setBeers: (beers: TBeer[]) => void;
  addBeers: (beers: TBeer[]) => void;
  removeBeer: (beerId: number) => void;
  removeBeers: (beersIds: number[]) => void;
}

const useBeersStore = create<IBeersState>((set) => ({
  beers: [],
  setBeers: (beers: TBeer[]) => set({ beers }),
  addBeers: (beers: TBeer[]) =>
    set((state) => ({ beers: [...state.beers, ...beers] })),
  removeBeer: (beerId: number) =>
    set((state) => ({
      beers: state.beers.filter((beer) => beer.id !== beerId),
    })),
  removeBeers: (beersIds: number[]) =>
    set((state) => ({
      beers: state.beers.filter((beer) => !beersIds.includes(beer.id)),
    })),
}));

export default useBeersStore;
