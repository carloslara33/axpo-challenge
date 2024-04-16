import { RJSFSchema } from "@rjsf/utils";
import { countries } from "./countries.ts";

export const solarSchema: RJSFSchema = {
  type: "object",
  definitions: {
    Location: {
      title: "Location",
      type: "string",
      anyOf: Object.keys(countries).map((k) => ({
        type: "string",
        enum: [k],
        title: countries[k],
      })),
    },
  },
  properties: {
    price: {
      type: "number",
      title: "Price",
    },
    capacity: {
      type: "number",
      title: "Capacity",
    },
    minQuantity: {
      type: "number",
      title: "Minimum Purchase Quantity",
    },
    contractTerms: {
      type: "string",
      title: "Contract Terms",
    },
    paymentTerms: {
      type: "string",
      title: "Payment Terms",
    },

    location: {
      $ref: "#/definitions/Location",
      title: "Location",
    },
    outputPrediction: {
      type: "number",
      title: "Energy Output Prediction",
    },

    certifications: {
      type: "number",
      title: "Certifications",
    },
  },
};
