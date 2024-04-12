import { CountryCode } from "./locations";
import { ProducerCommon } from "./producerCommon";

export interface SolarEnergyProducers extends ProducerCommon {
  capacity: number;
  location: CountryCode;
  outputPrediction: number;
  certifications?: string[];
}
