import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
//import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";

export default function TestComp() {
  //rgba(8, 147, 24, 0.7)
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 700, bgcolor: "rgba(105, 111, 112, 0.7)" }}
    >
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{ textAlign: "center" }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Our plans
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Badge badgeContent={"Popular"} color="secondary">
            <Typography gutterBottom variant="h5" component="div">
              Sellavi
            </Typography>
          </Badge>
          <Button variant="contained" sx={{ mb: "2%" }}>
            Start free trail
          </Button>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Online store with top-notch conditions for sales including
          advertisement tools, support, and training via online chat
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            Sellavi Plus
          </Typography>
          {/* <Typography gutterBottom variant="h6" component="div">
            $4.50
          </Typography> */}
          <Button variant="contained" sx={{ mb: "2%" }}>
            Start free trail
          </Button>
        </Stack>
        <Typography color="text.secondary" variant="body2">
          Upscale your online business by using our customized services, special
          integrations and the best prices for deliveries All advantages
        </Typography>
      </Box>
    </Card>
  );
}
