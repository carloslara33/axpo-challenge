import Paper from "@mui/material/Paper";
import React from "react";

export default function Solar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem"
      }}
    >
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div>test</div>
      </Paper>
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div>test2</div>
      </Paper>
    </div>
  );
}
