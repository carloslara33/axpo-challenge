import { FormField, SolarEnergyProducers, countries } from "../types/index.ts";

const solarPriceField: FormField<SolarEnergyProducers> = {
  name: "capacity",
  fieldType: "number",
};

const solarMinQuantityField: FormField<SolarEnergyProducers> = {
  name: "minQuantity",
  fieldType: "number",
};

const solarContractTermsField: FormField<SolarEnergyProducers> = {
  name: "contractTerms",
  fieldType: "textarea",
};

const solarPaymentTermsField: FormField<SolarEnergyProducers> = {
  name: "paymentTerms",
  fieldType: "textarea",
};

const solarCapacityField: FormField<SolarEnergyProducers> = {
  name: "capacity",
  fieldType: "number",
};

const solarLocationField: FormField<SolarEnergyProducers> = {
  name: "location",
  fieldType: "select",
  extraData: {
    source: "internal",
    data: countries,
  },
};

const solaroOtputPredictionField: FormField<SolarEnergyProducers> = {
  name: "outputPrediction",
  fieldType: "number",
};

const solarCertificationsField: FormField<SolarEnergyProducers> = {
  name: "certifications",
  fieldType: "text",
};

export const solarFieldsConfig: Record<string, FormField<any>> = {
  solarPriceField,
  solarMinQuantityField,
  solarContractTermsField,
  solarPaymentTermsField,
  solarCapacityField,
  solarLocationField,
  solaroOtputPredictionField,
  solarCertificationsField,
};
