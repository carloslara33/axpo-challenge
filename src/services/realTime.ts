import {  BehaviorSubject } from "rxjs";

import { solarEnergyItems } from "../mocks/index.ts";
import { SolarEnergyOrder } from "../types/index.ts";

export const MockWebSocket = (function () {
  let instance;
  function init() {
    const orders = new BehaviorSubject(solarEnergyItems);

    const updateOrder = (order: SolarEnergyOrder) => {
      const currentOrders = orders.getValue();
      const orderToUpdateIndex = currentOrders.findIndex(
        (o) => order.id === o.id
      );
      currentOrders[orderToUpdateIndex] = order;
      orders.next(currentOrders);
    };

    const addOrder = (order: SolarEnergyOrder) => {
      orders.next([...orders.getValue(), order]);
    };

    const close = () => {
      orders.complete();
    };

    const getOrdersObservable = () => {
      return orders.asObservable();
    };
    return {
      updateOrder,
      addOrder,
      close,
      getOrdersObservable,
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();
