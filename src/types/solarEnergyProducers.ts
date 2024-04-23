import CountryCode from "./locations.ts";
import { ProducerCommon, energyTypes } from "./producerCommon.ts";

export default interface SolarEnergyProducers extends ProducerCommon {
  capacity: number;
  location: CountryCode;
  outputPrediction: number;
  certifications?: string[];
}

export interface SolarEnergyOrder extends SolarEnergyProducers {
  energyType: energyTypes.solar;
  orderType: "buy" | "sell";
  status: "pending" | "processing" | "completed";
}
