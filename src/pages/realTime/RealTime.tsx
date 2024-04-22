import React, { useContext } from "react";

import { OrdersContext } from "../../contexts/OrdersContext.tsx";

export default function RealTime() {
  const { orders } = useContext(OrdersContext);

  return <div>{orders ? JSON.stringify(orders) : "Loading...."}</div>;
}
