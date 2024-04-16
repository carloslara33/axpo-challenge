import CountryCode from "./locations.ts";
import { ProducerCommon } from "./producerCommon.ts";

export default interface SolarEnergyProducers extends ProducerCommon {
  capacity: number;
  location: CountryCode;
  outputPrediction: number;
  certifications?: string[];
}

export interface SolarEnergyOrder extends SolarEnergyProducers {
  id: number;
  orderType: "buy" | "sell";
  status: "pending" | "processing" | "completed";
}
