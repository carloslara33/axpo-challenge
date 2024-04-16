import { solarEnergyItems, SolarEnergyOrder } from "../mocks/index.ts";

export const getTrades = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(solarEnergyItems);
    }, 1500);
  });
};

export const addTrade = (trade: SolarEnergyOrder) => {

    
};
