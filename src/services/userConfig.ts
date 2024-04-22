import { solarSchema } from "../mocks/index.ts";

export const getUserConfig = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ solarSchema });
    }, 1500);
  });
};
