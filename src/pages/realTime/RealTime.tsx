import React, { useContext } from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import { OrdersContext } from "../../contexts/OrdersContext.tsx";

const columnDefs = [
  { field: "id" },
  { field: "orderType" },
  { field: "status" },
  { field: "capacity" },
  { field: "location" },
  { field: "outputPrediction" },
  {
    field: "certifications",
    valueFormatter: (params) => params.value?.join(", "),
  },
  { field: "price" },
  { field: "minQuantity" },
  { field: "contractTerms" },
  { field: "paymentTerms" },
];

export default function RealTime() {
  const { orders } = useContext(OrdersContext);

  return (
    <div
      className="ag-theme-quartz" 
      style={{ height: 500 }} 
    >
      <AgGridReact rowData={orders} columnDefs={columnDefs} />
    </div>
  );
}
