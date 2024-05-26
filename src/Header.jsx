import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "./theme";
// Header component
const Header = ({ title, subtitle }) => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="10px">
      {/* Title */}
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }} // Styling using sx prop
      >
        {title}
      </Typography>
      {/* Subtitle */}
      <Typography variant="h6" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;