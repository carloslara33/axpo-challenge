import React, { createContext, useState, useEffect } from "react";
import { MockWebSocket } from "../services/realTime.ts";

export const OrdersContext = createContext({});

export const OrdersProvider = ({ children }) => {
  const webSocket = MockWebSocket.getInstance();
  const orders$ = webSocket.getOrdersObservable();
  const { addOrder, updateOrder } = webSocket;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const subscription = orders$.subscribe({
      next: (newOrders) => {
        setOrders(newOrders);
      },
    });

    return () => {
      subscription.unsubscribe();
      webSocket.close();
    };
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, addOrder, updateOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
