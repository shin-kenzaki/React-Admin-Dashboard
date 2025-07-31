import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";


const LineChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveLine /* or Line for fixed dimensions */
            data={data}
            theme={{
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
                            strokeWidth: 1,
                        },
                        text:{
                            fill: colors.grey[100]
                        }
                    }
                },
                legends:{
                    text:{
                        fill: colors.grey[100]
                    }
                },
                tooltip:{
                    container:{
                        // color: colors.primary[500]
                        background: colors.primary[100],
                        color: colors.grey[900],
                        fontSize: 12,
                        borderRadius: "4px",
                        padding: "8px",
                        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                    },
                }
            }}
            colors= {isDashboard ? {datum: "color"} : { scheme: "nivo"}}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            curve="catmullRom"
            axisBottom={{ 
                legend: isDashboard ? undefined : 'transportation', 
                legendOffset: 36 
            }}
            axisLeft={{ 
                tickValues: 5,
                legend: isDashboard ? undefined : 'count', 
                legendOffset: -40 
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'seriesColor' }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 22,
                    symbolShape: 'circle'
                }
            ]}
        />
    );
};

export default LineChart;