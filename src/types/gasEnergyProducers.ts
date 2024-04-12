import { ProducerCommon } from "./producerCommon";

export type DeliveryMethod = "pipeline" | "shipped";

export interface GasEnergyProducers extends ProducerCommon {
  capacity: number;
  deliveryMethod: DeliveryMethod;
  flexibilityOfSupply: boolean;
  emissionCredit: boolean;
  emissionPenalty: boolean;
  contractLength: number;
}
