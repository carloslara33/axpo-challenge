import { ProducerCommon } from "./producerCommon.ts";

export type DeliveryMethod = "pipeline" | "shipped";

export default interface GasEnergyProducers extends ProducerCommon {
  capacity: number;
  deliveryMethod: DeliveryMethod;
  flexibilityOfSupply: boolean;
  emissionCredit: boolean;
  emissionPenalty: boolean;
  contractLength: number;
}
