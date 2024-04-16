import { countries } from "../mocks/index.ts";

type CountryCode = keyof typeof countries;

export default CountryCode;
