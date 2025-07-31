import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme"
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" p="20px">
        {/* Top Row */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
            {icon}
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: colors.grey[100], mt: "5px" }}
            >
                {title}
            </Typography>
            </Box>
            <ProgressCircle progress={progress} />
        </Box>

        {/* Bottom Row */}
        <Box display="flex" justifyContent="space-between" mt="15px">
            <Typography variant="h6" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
            </Typography>
            <Typography variant="h6" fontStyle="italic" sx={{ color: colors.greenAccent[600] }}>
            {increase}
            </Typography>
        </Box>
    </Box>
  );
};

export default StatBox;