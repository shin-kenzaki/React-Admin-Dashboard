import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
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
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            borderWidth={1.5}
            borderColor="#152538"
            projectionScale={isDashboard ? 40 : 150}
            projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5,0.5]}
            projectionRotation={[0,0,0]}
            legends={
                !isDashboard ? 
                [{
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: colors.grey[100],
                    itemOpacity: 0.85,
                    symbolSize: 18
                },] : undefined
            }
        />
    );
}

export default GeographyChart;
