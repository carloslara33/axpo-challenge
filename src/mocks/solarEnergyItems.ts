import { SolarEnergyOrder } from "../types/index";
import { energyTypes } from "../types/producerCommon.ts";

export const generateMock = () => {
  return {
    energyType: energyTypes.solar,
    orderType: "buy",
    status: "pending",
    capacity: Math.round(Math.random() * 1000),
    location: "DEU",
    outputPrediction: Math.round(Math.random() * 100),
    certifications: ["ISO-14001", "LEED"],
    price:  Math.round(Math.random() * 10),
    minQuantity:  Math.round(Math.random() * 1000),
    contractTerms: "12 months, 5% penalty for early termination",
    paymentTerms: "30 days net",
  } as SolarEnergyOrder;
};

export const solarEnergyItems: SolarEnergyOrder[] = [
  {
    id: 1,
    energyType: energyTypes.solar,
    orderType: "buy",
    status: "pending",
    capacity: 500,
    location: "DEU",
    outputPrediction: 480,
    certifications: ["ISO-14001", "LEED"],
    price: 0.1,
    minQuantity: 1000,
    contractTerms: "12 months, 5% penalty for early termination",
    paymentTerms: "30 days net",
  },
  {
    id: 2,
    energyType: energyTypes.solar,
    orderType: "buy",
    status: "completed",
    capacity: 750,
    location: "DEU",
    outputPrediction: 700,
    price: 0.12,
    minQuantity: 500,
    contractTerms: "24 months, 10% penalty for early termination",
    paymentTerms: "60 days net",
  },
  {
    id: 3,
    energyType: energyTypes.solar,
    orderType: "buy",
    status: "completed",
    capacity: 600,
    location: "BEL",
    outputPrediction: 550,
    certifications: ["ISO-50001"],
    price: 0.11,
    minQuantity: 800,
    contractTerms: "6 months, no penalty for early termination",
    paymentTerms: "45 days net",
  },
  {
    id: 4,
    energyType: energyTypes.solar,
    orderType: "sell",
    status: "completed",
    capacity: 450,
    location: "MLT",
    outputPrediction: 420,
    price: 0.09,
    minQuantity: 1200,
    contractTerms: "18 months, 3% penalty for early termination",
    paymentTerms: "30 days net",
  },
];
