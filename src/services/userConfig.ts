import { solarFieldsConfig } from "../mocks/index.ts";

export const getUserConfig = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(solarFieldsConfig);
    }, 1500);
  });
};
