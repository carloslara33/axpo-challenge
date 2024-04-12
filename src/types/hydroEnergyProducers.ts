import { ProducerCommon } from "./producerCommon";

export interface HydroEnergyProducers extends ProducerCommon {
  capacity: number;
  waterFlowRate: number;
  outputPrediction: number;
  certifications?: string[];
  reservoirLevel: number;
  compliance: boolean;
  flexibility: boolean;
  storage: boolean;
}
