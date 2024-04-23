import React, { useContext, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import { OrdersContext } from "../../contexts/OrdersContext.tsx";
import { energyTypes } from "../../types/producerCommon.ts";
import { ButtonRenderer } from "../../components/ButtonRenderer/ButtonRenderer.tsx";
import { SolarEnergyOrder } from "../../types/solarEnergyProducers.ts";

export default function RealTime() {
  const { orders, updateOrder } = useContext(OrdersContext);
  // just added the commons columns for all energy types

  const gridRef = useRef<AgGridReact<SolarEnergyOrder>>(null);
  const columnDefs = [
    { field: "id" },
    {
      field: "energyType",
      valueFormatter: (params) => energyTypes[params.value],
    },
    { field: "orderType" },
    { field: "status" },
    { field: "price" },
    { field: "minQuantity" },
    { field: "contractTerms" },
    { field: "paymentTerms" },
    {
      field: "actions",
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        callback: updateOrder,
      },
    },
  ];

  const components = useMemo(
    () => ({
      buttonRenderer: ButtonRenderer,
    }),
    []
  );


  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact
        // animateRows={true}
        ref={gridRef}
        rowData={orders}
        columnDefs={columnDefs}
        components={components}
      />
    </div>
  );
}
