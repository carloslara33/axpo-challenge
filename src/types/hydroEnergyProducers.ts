import { producerCommon } from "./producerCommon";

export interface hydroEnergyProducers extends producerCommon {
  capacity: number;
  waterFlowRate: number;
  outputPrediction: number;
  certifications?: string[];
  reservoirLevel: number;
  compliance: boolean;
  flexibility: boolean;
  storage: boolean;
}
