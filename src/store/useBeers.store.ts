import { TBeer } from "types/Beer.type";
import { create } from "zustand";

export interface IBeersStore {
  beers: TBeer[];
  selectedBeers: TBeer[];

  addBeers: (beers: TBeer[]) => void;
  deleteBeers: (beers: TBeer[]) => void;
  toggleSelectedBeer: (beer: TBeer) => void;
  clearSelectedBeers: () => void;
}

/**
 * Beers store
 *
 * @description
 *  - `beers` - beers to display
 *  - `selectedBeers` - selected beers
 *  - `addBeers` - add beers
 *  - `toggleSelectedBeer` - toggle selected beer
 *  - `deleteBeers` - delete beers
 *  - `clearSelectedBeers` - clear selected beers
 *
 */

const useBeersStore = create<IBeersStore>((set) => ({
  beers: [],
  selectedBeers: [],

  addBeers: (beers: TBeer[]) =>
    set((state) => ({
      beers: [...state.beers, ...beers],
    })),
  deleteBeers: (beers: TBeer[]) =>
    set((state) => ({
      beers: state.beers.filter((beer) => !beers.includes(beer)),
    })),
  toggleSelectedBeer: (beer: TBeer) =>
    set((state) => ({
      selectedBeers: state.selectedBeers.includes(beer)
        ? state.selectedBeers.filter((selectedBeer) => selectedBeer !== beer)
        : [...state.selectedBeers, beer],
    })),
  clearSelectedBeers: () => set({ selectedBeers: [] }),
}));

export default useBeersStore;
