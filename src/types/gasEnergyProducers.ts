import { producerCommon } from "./producerCommon";

type deliveryMethod = "pipeline" | "shipped";

export interface solarEnergyProducers extends producerCommon {
  capacity: number;
  deliveryMethod: deliveryMethod;
  flexibilityOfSupply: boolean;
  emissionCredit: boolean;
  emissionPenalty: boolean;
  contractLength: number;
}
