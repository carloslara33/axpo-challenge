import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

import { UserConfigContext } from "../../contexts/UserConfigContext.tsx";
import { OrdersContext } from "../../contexts/OrdersContext.tsx";
import { energyTypes } from "../../types/producerCommon.ts";
import { SolarEnergyOrder } from "../../types/solarEnergyProducers.ts";

const defaultOrder: Partial<SolarEnergyOrder> = {
  energyType: energyTypes.solar,
  status: "pending",
};

const defaultBuyOrder: Partial<SolarEnergyOrder> = {
  ...defaultOrder,
  orderType: "buy",
};

const defaultSellOrder: Partial<SolarEnergyOrder> = {
  ...defaultOrder,
  orderType: "sell",
};

export default function Solar() {
  const { solarSchema, isloading } = useContext(UserConfigContext);
  const { addOrder } = useContext(OrdersContext);

  const handleBuy = (ev) => {
    addOrder({ ...defaultBuyOrder, ...ev.formData });
    console.log(ev.formData);
  };

  const handleSell = (ev) => {
    addOrder({ ...defaultSellOrder, ...ev.formData });
    console.log(ev.formData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
      }}
    >
      {!isloading && solarSchema && (
        <>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>Buy Solar</h3>
            <Form
              schema={solarSchema}
              validator={validator}
              onSubmit={handleBuy}
            ></Form>
          </Paper>

          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3> Sell Soar</h3>
            <Form
              schema={solarSchema}
              validator={validator}
              onSubmit={handleSell}
            ></Form>
          </Paper>
        </>
      )}
    </div>
  );
}
