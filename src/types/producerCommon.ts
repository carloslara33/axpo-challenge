export enum energyTypes {
  "solar",
  "gas",
  "thermo",
}

export interface ProducerCommon {
  id?: number;
  energyType: energyTypes;
  price: number;
  minQuantity: number;
  contractTerms: string;
  paymentTerms: string;
}
