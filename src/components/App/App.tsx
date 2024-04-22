import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Gas, Solar, Hydro, RealTime } from "../../pages/index.ts";
import AppBar from "../AppBar/AppBar.tsx";
import { UserConfigProvider } from "../../contexts/UserConfigContext.tsx";
import { OrdersProvider } from "../../contexts/OrdersContext.tsx";

export default function App() {
  return (
    <UserConfigProvider>
      <OrdersProvider>
        <Router>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar></AppBar>
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) => theme.palette.grey[100],
                flexGrow: 1,
                height: "100vh",
                overflow: "auto",
              }}
            >
              <Container maxWidth="lg" sx={{ my: 12 }}>
                <Routes>
                  <Route path="/solar" element={<Solar />} />
                  <Route path="/gas" element={<Gas />} />
                  <Route path="/hydro" element={<Hydro />} />
                  <Route path="/real-time" element={<RealTime />} />
                </Routes>
              </Container>
            </Box>
          </Box>
        </Router>
      </OrdersProvider>
    </UserConfigProvider>
  );
}
