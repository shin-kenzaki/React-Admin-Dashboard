import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    return (
        <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            theme ={{
                axis:{
                    domain:{
                        line:{
                            stroke: colors.grey[100]
                        }
                    },
                    legend:{
                        text:{
                            fill: colors.grey[100]
                        }
                    },
                    ticks:{
                        line:{
                            stroke: colors.grey[100],
                            strokeWidth: 1
                        },
                        text:{
                            fill: colors.grey[100],
                        }
                    }
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
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={colors.primary[100]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color', modifiers: [['darker', 2]] }}
            enableArcLabels={false}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    symbolShape: 'circle',
                    itemTextColor: colors.grey[100],
                }
            ]}
        />
    );
}

export default PieChart;