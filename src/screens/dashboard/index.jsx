import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard!" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[500],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Stat Boxes */}
        {[{
          title: "12,361", subtitle: "Emails Sent", progress: "0.75", increase: "+14%", icon: <EmailIcon sx={{ color: colors.greenAccent[500], fontSize: 26 }} />
        }, {
          title: "431,225", subtitle: "Sales Obtained", progress: "0.5", increase: "+21%", icon: <PointOfSaleIcon sx={{ color: colors.greenAccent[500], fontSize: 26 }} />
        }, {
          title: "32,441", subtitle: "New Clients", progress: "0.3", increase: "+5%", icon: <PersonAddIcon sx={{ color: colors.greenAccent[500], fontSize: 26 }} />
        }, {
          title: "1,325,134", subtitle: "Traffic Inbound", progress: "0.8", increase: "+43%", icon: <TrafficIcon sx={{ color: colors.greenAccent[500], fontSize: 26 }} />
        }].map((item, i) => (
          <Box
            key={i}
            gridColumn="span 3"
            backgroundColor={colors.primary[600]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox {...item} />
          </Box>
        ))}

        {/* Revenue Chart */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
        >
          <Box
            mt="15px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <IconButton>
              <DownloadOutlinedIcon sx={{ fontSize: 26, color: colors.greenAccent[500] }} />
            </IconButton>
          </Box>
          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[600]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[600]}`}
            p="15px"
          >
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((tx, i) => (
            <Box
              key={`${tx.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[600]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {tx.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {tx.user}
                </Typography>
              </Box>
              <Typography color={colors.grey[100]}>
                {tx.date}
              </Typography>
              <Box
                backgroundColor={colors.greenAccent[500]}
                padding="5px 10px"
                borderRadius="4px"
              >
                ${tx.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[600]}
            p="30px"
        >
            <Typography
                variant="h5"
                fontWeight="600"
            >
                Campaign
            </Typography>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
            >
                <ProgressCircle size="125" />
                <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                    sx={{
                        mt: "15px"
                    }}
                >
                    $48.352 revenue generated
                </Typography>
                <Typography
                    variant="h5"
                    fontWeight="600"
                >
                    Includes extra misc expendetures and costs
                </Typography>
            </Box>
        </Box>

        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[600]}
        >
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{
                    p: "30px 30px 0 30px"
                }}
            >
                Sales Quantity
            </Typography>
            <Box
                height="250px"
                mt="-20px"
            >
                <BarChart isDashboard={true}/>
            </Box>
        </Box>

        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[600]}
            p="30px"
        >
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{
                    mb: "15px"
                }}
            >
                Geography Based Traffic
            </Typography>
            <Box
                height="200px"
            >
                <GeographyChart isDashboard={true}/>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;