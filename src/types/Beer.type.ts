import { TValueUnit } from "types/ValueUnit.type";
import { TBrewingMethod } from "types/BrewingMethod.type";
import { TIngredient } from "types/Ingredient.type";

export type TBeer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: TValueUnit;
  boil_volume: TValueUnit;
  method: TBrewingMethod;
  ingredients: {
    [key: string]: string | TValueUnit | string[] | TIngredient[];
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};
