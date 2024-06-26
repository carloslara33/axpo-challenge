import { BehaviorSubject } from "rxjs";

import { solarEnergyItems, generateMock } from "../mocks/index.ts";
import { SolarEnergyOrder } from "../types/index.ts";

export const MockWebSocket = (function () {
  let instance;
  function init() {
    const orders = new BehaviorSubject(solarEnergyItems);
    const orders$ = orders.asObservable();

    const getNewId = () => {
      const values = orders.getValue();
      return Number(values[values.length - 1].id) + 1;
    };

    const updateOrder = (order: SolarEnergyOrder) => {
      const currentOrders = orders.getValue();
      const orderToUpdateIndex = currentOrders.findIndex(
        (o) => order.id === o.id
      );
      currentOrders[orderToUpdateIndex] = { ...order };
      orders.next([...currentOrders]);
    };

    const addOrder = (order: SolarEnergyOrder) => {
      order.id = getNewId();
      orders.next(orders.getValue().concat([order]));
    };

    const close = () => {
      orders.complete();
    };

    const getOrdersObservable = () => {
      return orders$;
    };

    // simulates the interaction of other users
    setInterval(() => {
      addOrder(generateMock());
    }, 5000);

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
