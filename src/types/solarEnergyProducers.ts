import { CountryCode } from "./locations";
import { producerCommon } from "./producerCommon";

export interface solarEnergyProducers extends producerCommon {
  capacity: number;
  location: CountryCode;
  outputPrediction: number;
  certifications?: string[];
}
