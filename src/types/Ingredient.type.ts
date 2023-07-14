import { TValueUnit } from "types/ValueUnit.type";

export type TIngredient = {
  name: string;
  amount: TValueUnit;
  add?: string;
  attribute?: string;
};
