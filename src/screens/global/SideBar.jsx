import { useState, useContext } from "react";
import { Sidebar as ProSideBar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TimelineOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  MapOutlined,
  MenuOutlined,
  Person2Outlined,
} from "@mui/icons-material";

import { tokens, ColorModeContext } from "../../theme";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const isActive = selected === title;

  return (
    <MenuItem
      active={isActive}
      onClick={() => {
        setSelected(title);
        navigate(to);
      }}
      icon={icon}
      style={{
        color: isActive ? colors.blueAccent[500] : colors.grey[100],
      }}
    >
      <Typography sx={{ fontWeight: isActive ? "bold" : "normal" }}>
        {title}
      </Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const user = {
    name: "Kenneth Laurence",
    role: "Full Stack Developer",
    avatar: "../../assets/user.jpg",
  };

  return (
    <ProSideBar 
      collapsed={isCollapsed}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Menu iconShape="square">
        {/* Toggle Sidebar */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlined /> : undefined}
          style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
        >
          {!isCollapsed && (
            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
              <Typography variant="h6" color={colors.grey[100]}>
                ADMIN DASHBOARD
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlined />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {/* User Section */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile"
                width="100px"
                height="100px"
                src={user.avatar}
                style={{ borderRadius: "50%", cursor: "pointer" }}
                onClick={colorMode.toggleColorMode}
                title="Toggle theme"
              />
            </Box>
            <Box textAlign="center" mt={2}>
              <Typography variant="h2" fontWeight="bold" color={colors.grey[100]}>
                {user.name}
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                {user.role}
              </Typography>
            </Box>
          </Box>
        )}

        {/* Menu Sections */}
        <Item title="Dashboard" to="/" icon={<HomeOutlined />} selected={selected} setSelected={setSelected} />

        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
          Data
        </Typography>
        <Item title="Manage Team" to="/team" icon={<PeopleOutlined />} selected={selected} setSelected={setSelected} />
        <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlined />} selected={selected} setSelected={setSelected} />
        <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlined />} selected={selected} setSelected={setSelected} />

        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
          Pages
        </Typography>
        <Item title="Profile Form" to="/form" icon={<Person2Outlined />} selected={selected} setSelected={setSelected} />
        <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlined />} selected={selected} setSelected={setSelected} />
        <Item title="FAQ Page" to="/faq" icon={<HelpOutlineOutlined />} selected={selected} setSelected={setSelected} />

        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
          Charts
        </Typography>
        <Item title="Bar Chart" to="/bar" icon={<BarChartOutlined />} selected={selected} setSelected={setSelected} />
        <Item title="Pie Chart" to="/pie" icon={<PieChartOutlined />} selected={selected} setSelected={setSelected} />
        <Item title="Line Chart" to="/line" icon={<TimelineOutlined />} selected={selected} setSelected={setSelected} />
        <Item title="Geography Chart" to="/geography" icon={<MapOutlined />} selected={selected} setSelected={setSelected} />

        {/* Footer */}
        {!isCollapsed && (
          <Box textAlign="center" p={2}>
            <Typography variant="caption" color={colors.grey[300]}>
              © 2025 Admin Panel
            </Typography>
          </Box>
        )}
      </Menu>
    </ProSideBar>
  );
};

export default Sidebar;
