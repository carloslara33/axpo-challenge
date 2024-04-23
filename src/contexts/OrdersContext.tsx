import React, { createContext, useState, useEffect, useRef } from "react";
import { MockWebSocket } from "../services/realTime.ts";

export const OrdersContext = createContext({});

export const OrdersProvider = ({ children }) => {
  const webSocket = useRef(MockWebSocket.getInstance());
  const orders$ = useRef(webSocket.current.getOrdersObservable());
  const { addOrder, updateOrder, close } = webSocket.current;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const subscription = orders$.current.subscribe({
      next: (newOrders) => {
        setOrders(newOrders);
      },
      error: (err) => console.error("Error: ", err),
      complete: () => console.log("Completed"),
    });
    return () => {
      subscription.unsubscribe();
      close();
    };
  }, [close]);

  return (
    <OrdersContext.Provider value={{ orders, addOrder, updateOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
