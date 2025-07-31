import { ColorModeContext, useMode } from "./theme.js";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./screens/global/TopBar";
import Sidebar from "./screens/global/SideBar";
import Dashboard from "./screens/dashboard";
import Team from "./screens/team";
import Invoices from "./screens/invoices";
import Contacts from "./screens/contacts";
import Bar from "./screens/bar";
import Form from "./screens/form";
import Line from "./screens/line";
import Pie from "./screens/pie";
import FAQ from "./screens/faq";
import Geography from "./screens/geography";
import Calendar from "./screens/calendar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Full‐height flex container */}
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Sidebar sticks to full height */}
          <Sidebar 
            sx={{
              flexShrink: 0,
              height: "100%",
              overflowY: "auto",
            }}
          />

          {/* Main content scrolls independently */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
            }}
          >
            <Topbar />

            <Box sx={{ p: 2, flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;