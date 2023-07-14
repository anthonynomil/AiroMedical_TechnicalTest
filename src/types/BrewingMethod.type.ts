import { TValueUnit } from "types/ValueUnit.type";

export type TBrewingMethod = {
  mash_temp: {
    temp: TValueUnit;
    duration: number;
  };
  fermentation: {
    temp: TValueUnit;
  };
  twist?: string;
};
