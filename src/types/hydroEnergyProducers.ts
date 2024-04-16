import { ProducerCommon } from "./producerCommon.ts";

export default interface HydroEnergyProducers extends ProducerCommon {
  capacity: number;
  waterFlowRate: number;
  outputPrediction: number;
  certifications?: string[];
  reservoirLevel: number;
  compliance: boolean;
  flexibility: boolean;
  storage: boolean;
}
