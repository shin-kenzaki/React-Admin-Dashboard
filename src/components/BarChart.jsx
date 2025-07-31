import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Custom color function using color keys from data object
  const getColor = ({ id, data }) => {
    const colorKey = `${id}Color`;
    return data[colorKey];
  };

  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "kebab", "donut"]}
      indexBy="country"
      groupMode="grouped"
      padding={0.3}
      innerPadding={6}
      margin={isDashboard 
        ? { top: 40, right: 50, bottom: 80, left: 50 }
        : { top: 60, right: 100, bottom: 100, left: 80 }
      }
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={getColor}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      enableLabel={!isDashboard}
      labelSkipWidth={12}
      labelSkipHeight={12}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Food Count",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            background: colors.primary[100],
            color: colors.grey[900],
            fontSize: 12,
            borderRadius: "4px",
            padding: "8px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
          },
        },
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom",
          direction: "row",
          translateY: 60,
          itemWidth: 80,
          itemHeight: 20,
          itemsSpacing: 4,
          symbolSize: 12,
        },
      ]}
      layout="vertical"
      motionConfig="gentle"
      role="application"
      ariaLabel="Grouped food consumption bar chart"
      barAriaLabel={({ id, value, indexValue }) =>
        `${id}: ${value} in country: ${indexValue}`
      }
    />
  );
};

export default BarChart;
