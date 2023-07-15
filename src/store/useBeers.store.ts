import { TBeer } from "types/Beer.type";
import { create } from "zustand";

export interface IBeersStore {
  totalBeers: TBeer[];
  beers: TBeer[];
  selectedBeers: TBeer[];

  setBeers: (beers: TBeer[]) => void;
  addBeers: (beers: TBeer[]) => void;
  toggleSelectedBeer: (beer: TBeer) => void;
  clearSelectedBeers: () => void;
  deleteBeers: (beers: TBeer[]) => void;
}

const useBeersStore = create<IBeersStore>((set) => ({
  totalBeers: [],
  beers: [],
  selectedBeers: [],

  setBeers: (beers: TBeer[]) =>
    set((state) => ({
      totalBeers: beers,
      beers: state.totalBeers.slice(0, 15),
    })),
  addBeers: (beers: TBeer[]) =>
    set((state) => ({
      totalBeers: [...state.totalBeers, ...beers],
      beers: [...state.beers, ...beers],
    })),
  toggleSelectedBeer: (beer: TBeer) =>
    set((state) => ({
      selectedBeers: state.selectedBeers.includes(beer)
        ? state.selectedBeers.filter((selectedBeer) => selectedBeer !== beer)
        : [...state.selectedBeers, beer],
    })),
  clearSelectedBeers: () => set({ selectedBeers: [] }),
  deleteBeers: (beers: TBeer[]) =>
    set((state) => ({
      beers: state.beers.filter((beer) => !beers.includes(beer)),
      selectedBeers: [],
    })),
}));

export default useBeersStore;
