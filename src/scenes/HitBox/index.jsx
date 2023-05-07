import { Box } from "@mui/material";
import Header from "../../components/Header";
import HitBoxChart from "../../components/hitboxChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="HitBox Chart" subtitle="Simple Hit Box" />
      <Box height="75vh">
        <HitChart/>
      </Box>
    </Box>
  );
};

export default HitBox;
